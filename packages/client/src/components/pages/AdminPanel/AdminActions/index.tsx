import { FunctionComponent, useContext } from 'react';
import {
  Button,
  Icon,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { FaTrashAlt, FaUserCog } from 'react-icons/fa';
import {
  deleteSelectedUsersMessage,
  unauthorizedMessage,
  Users,
} from '@my-template/shared';
import DeleteAllUsersModal from '../../../Table/TableFooter/DeleteAllUsersModal';
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

/**
 * TODO: refactor to controller pattern
 */
const AdminActions: FunctionComponent<Props> = ({
  icons = true,
  ids: userIds,
}) => {
  const isMobile = useBreakpointValue({ base: true, sm: false });
  const { isLoading, startLoading, stopLoading } = useLoading();
  const {
    toast: deleteSelectedUsersSuccessToast,
    toastOptions: deleteSelectedUsersSuccessToastOptions,
  } = useSuccessToast(`Deleted selected users successfully.`);
  const {
    toast: deleteSelectedUsersErrorToast,
    toastOptions: deleteSelectedUsersErrorToastOptions,
  } = useErrorToast(`Deleting selected users failed - please try again.`);
  const {
    toast: unauthorizedErrorToast,
    toastOptions: unauthorizedErrorToastOptions,
  } = useErrorToast(unauthorizedMessage);
  const { isAuthorized } = useContext(AuthorizationContext);
  /**
   * TODO: abstract this function
   */
  const deleteSelectedUsers: DeleteUser = async () => {
    try {
      if (!isAuthorized) {
        console.error(unauthorizedMessage);

        unauthorizedErrorToast(unauthorizedErrorToastOptions);

        return;
      }

      startLoading();
      await fetchDeleteSelectedUsers(userIds);

      deleteSelectedUsersSuccessToast(deleteSelectedUsersSuccessToastOptions);
    } catch (error) {
      console.error(error);

      deleteSelectedUsersErrorToast(deleteSelectedUsersErrorToastOptions);
    }

    stopLoading();
  };
  const users = queryClient.getQueryData(`users`) as Users;
  const { colorModeShadeInverted } = useColorModeShade(`red`);
  const alertDisclosure = useDisclosure();
  const disclosure = useDisclosure();
  const { darkModeTextColorInverted } = useDarkMode();
  const noUsersSelected = userIds.length <= 0;
  const oneOrMoreUsersSelected = userIds.length > 0;
  const focusAndHover = !noUsersSelected
    ? {
        backgroundColor: colorModeShadeInverted,
        color: darkModeTextColorInverted,
        borderColor: colorModeShadeInverted,
      }
    : undefined;

  if (isMobile) {
    return (
      <Modal
        actionIcon={FaUserCog}
        headerIcon={FaUserCog}
        alertDisclosure={alertDisclosure}
        disclosure={disclosure}
        toggleButtonText={`Admin Actions`}
        headerText={`Admin Actions`}
        modalProps={{
          mx: 5,
        }}
      >
        <UpdateUserProfileForm userIds={userIds} />
        <UpdateUserPasswordForm userIds={userIds} />
        <Button
          rightIcon={icons ? <Icon as={FaTrashAlt} mb={0.5} /> : undefined}
          onClick={oneOrMoreUsersSelected ? deleteSelectedUsers : undefined}
          disabled={noUsersSelected}
          isLoading={isLoading}
          title={noUsersSelected ? deleteSelectedUsersMessage : undefined}
          border={`2px solid`}
          borderColor={colorModeShadeInverted}
          mr={5}
          p={5}
          isFullWidth={isMobile}
          mb={{ base: 5, sm: 0 }}
          _hover={focusAndHover}
          _focusWithin={focusAndHover}
        >
          Delete Selected
        </Button>
        {users?.length > 1 && <DeleteAllUsersModal />}
      </Modal>
    );
  }

  return (
    <>
      <UpdateUserProfileForm userIds={userIds} />
      <UpdateUserPasswordForm userIds={userIds} />
      <Button
        rightIcon={icons ? <Icon as={FaTrashAlt} mb={0.5} /> : undefined}
        onClick={oneOrMoreUsersSelected ? deleteSelectedUsers : undefined}
        disabled={noUsersSelected}
        isLoading={isLoading}
        title={noUsersSelected ? deleteSelectedUsersMessage : undefined}
        border={`2px solid`}
        borderColor={colorModeShadeInverted}
        _hover={focusAndHover}
        _focusWithin={focusAndHover}
      >
        Delete Selected
      </Button>
      {users?.length > 1 && <DeleteAllUsersModal />}
    </>
  );
};

export default AdminActions;
