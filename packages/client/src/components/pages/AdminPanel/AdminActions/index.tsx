import { Fragment, FunctionComponent, useContext } from 'react';
import {
  Box,
  Button,
  Icon,
  useBreakpointValue,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { FaTrashAlt, FaUserCog } from 'react-icons/fa';
import {
  deleteSelectedUsersMessage,
  unauthorizedMessage,
  UserObject,
  Users,
} from '@my-template/shared';
import useLoading from '../../../../hooks/ui/useLoading';
import useSuccessToast from '../../../../hooks/ui/useSuccessToast';
import useErrorToast from '../../../../hooks/ui/useErrorToast';
import { DeleteUser } from '../../../Table/TableFooter/types';
import queryClient from '../../../globals/Providers/queryClient';
import { Props } from './types';
import UpdateUserProfileForm from '../../../forms/UpdateUserProfileForm';
import UpdateUserPasswordForm from '../../../forms/UpdateUserPasswordForm';
import useColorModeShade from '../../../../hooks/ui/useColorModeShade';
import AuthorizationContext from '../../../../context/AuthorizationContext/AuthorizationContext';
import Modal from '../../../Modal';
import fetchDeleteSelectedUsers from '../../../../utils/api/fetchDeleteUser';
import useDarkMode from '../../../../hooks/ui/useDarkMode';
import DeleteAllUsersModal from '../../../Table/TableFooter/DeleteAllUsersModal';
import AuthenticationContext from '../../../../context/AuthenticationContext/AuthenticationContext';

/**
 * TODO: refactor to controller pattern
 */
const AdminActions: FunctionComponent<Props> = ({
  icons = true,
  ids: userIds,
}) => {
  const noSpaceForActions = useBreakpointValue({ base: true, xl: false });
  const [noSpaceForText] = useMediaQuery(`(max-width: 26em)`);
  const { isLoading, startLoading, stopLoading } = useLoading();
  const { activateToast: activateDeletedSelectedUsersToast } = useSuccessToast(
    `deletedSelectedUsers`,
    `Deleted selected users successfully.`
  );
  const {
    activateToast: activateDeleteSelectedUsersErrorToast,
  } = useErrorToast(
    `deletedSelectedUsers`,
    `Deleting selected users failed - please try again.`
  );
  const { activateToast: activateUnauthorizedToast } = useErrorToast(
    `unauthorized`,
    unauthorizedMessage
  );
  const { isAuthorized } = useContext(AuthorizationContext);
  /**
   * TODO: abstract this function
   */
  const deleteSelectedUsers: DeleteUser = async () => {
    try {
      if (!isAuthorized) {
        console.error(unauthorizedMessage);

        activateUnauthorizedToast();

        return;
      }

      startLoading();
      await fetchDeleteSelectedUsers(userIds);

      activateDeletedSelectedUsersToast();
    } catch (error) {
      console.error(error);

      activateDeleteSelectedUsersErrorToast();
    }

    stopLoading();
  };
  const users = queryClient.getQueryData(`users`) as Users;
  const { currentUser } = useContext(AuthenticationContext);
  const { role: currentUserRole } = currentUser as UserObject;
  const userToUpdate = users?.filter((user) => user?.id === userIds[0])[0];
  const unauthorized =
    currentUserRole !== `admin` && userToUpdate?.role === `admin`;
  const { colorModeShadeInverted } = useColorModeShade(`red`);
  const alertDisclosure = useDisclosure();
  const disclosure = useDisclosure();
  const { darkModeTextColorInverted, darkModeColor } = useDarkMode();
  const noUsersSelected = userIds?.length <= 0;
  const oneOrMoreUsersSelected = userIds?.length > 0;
  const focusAndHover = !noUsersSelected
    ? {
        backgroundColor: colorModeShadeInverted,
        borderColor: colorModeShadeInverted,
        boxShadow: `none`,
      }
    : undefined;
  const ConditionalWrapper = unauthorized ? Box : Fragment;
  const conditionalProps = unauthorized
    ? {
        cursor: `not-allowed`,
        title: `Only admins may delete other admins.`,
      }
    : undefined;

  if (noSpaceForActions) {
    return (
      <Modal
        actionIcon={FaUserCog}
        headerIcon={FaUserCog}
        alertDisclosure={alertDisclosure}
        disclosure={disclosure}
        toggleButtonText={noSpaceForText ? `Actions` : `Admin Actions`}
        headerText={`Admin Actions`}
        modalProps={{
          mx: 5,
        }}
      >
        <UpdateUserProfileForm userIds={userIds} />
        <UpdateUserPasswordForm userIds={userIds} />
        <ConditionalWrapper {...conditionalProps}>
          <Button
            pointerEvents={unauthorized ? `none` : undefined}
            rightIcon={icons ? <Icon as={FaTrashAlt} mb={0.5} /> : undefined}
            onClick={oneOrMoreUsersSelected ? deleteSelectedUsers : undefined}
            disabled={noUsersSelected}
            isLoading={isLoading}
            title={noUsersSelected ? deleteSelectedUsersMessage : undefined}
            border={`2px solid`}
            borderColor={colorModeShadeInverted}
            mr={5}
            p={5}
            isFullWidth={noSpaceForActions}
            mb={{ base: 5, xl: 0 }}
            _hover={focusAndHover}
            _focus={focusAndHover}
            backgroundColor={darkModeColor}
            color={darkModeTextColorInverted}
          >
            Delete Selected
          </Button>
        </ConditionalWrapper>
        {users?.length > 1 && <DeleteAllUsersModal />}
      </Modal>
    );
  }

  return (
    <>
      <UpdateUserProfileForm userIds={userIds} />
      <UpdateUserPasswordForm userIds={userIds} />
      <ConditionalWrapper {...conditionalProps}>
        <Button
          pointerEvents={unauthorized ? `none` : undefined}
          rightIcon={icons ? <Icon as={FaTrashAlt} mb={0.5} /> : undefined}
          onClick={oneOrMoreUsersSelected ? deleteSelectedUsers : undefined}
          disabled={unauthorized || noUsersSelected}
          isLoading={isLoading}
          title={noUsersSelected ? deleteSelectedUsersMessage : undefined}
          border={`2px solid`}
          borderColor={colorModeShadeInverted}
          _hover={focusAndHover}
          _focus={focusAndHover}
          backgroundColor={darkModeColor}
          color={darkModeTextColorInverted}
        >
          Delete Selected
        </Button>
      </ConditionalWrapper>
      {users?.length > 1 && <DeleteAllUsersModal />}
    </>
  );
};

export default AdminActions;
