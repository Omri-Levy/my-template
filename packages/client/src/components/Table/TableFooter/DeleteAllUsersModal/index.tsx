import { FunctionComponent, useContext, useState } from 'react';
import { useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import { FaTrashAlt } from 'react-icons/fa';
import { serverErrorMessage, UserObject, Users } from '@my-template/shared';
import fetchDeleteAllUsers from '../../../../utils/api/fetchDeleteAllUsers';
import Modal from '../../../Modal';
import { DeleteAllUsers } from './types';
import queryClient from '../../../globals/Providers/queryClient';
import useSuccessToast from '../../../../hooks/ui/useSuccessToast';
import useLoading from '../../../../hooks/ui/useLoading';
import useColorModeShade from '../../../../hooks/ui/useColorModeShade';
import AuthenticationContext from '../../../../context/AuthenticationContext/AuthenticationContext';

const DeleteAllUsersModal: FunctionComponent = () => {
  const disclosure = useDisclosure();
  const alertDisclosure = useDisclosure();
  const { onOpen } = alertDisclosure;
  const { isOpen } = disclosure;
  const { isLoading, stopLoading, startLoading } = useLoading();
  const [errorMessage, setErrorMessage] = useState(``);
  const { currentUser } = useContext(AuthenticationContext);
  const typesafeCurrentUser = currentUser as UserObject;
  const currentUserIsAdmin = typesafeCurrentUser?.role === `admin`;
  const { activateToast } = useSuccessToast(
    `deletedAllUsers`,
    `Deleted all users successfully.`
  );
  /**
   * TODO: abstract this function
   */
  const deleteAllUsers: DeleteAllUsers = (onClose) => async () => {
    try {
      startLoading();
      await fetchDeleteAllUsers(isOpen);

      onClose();

      activateToast();
    } catch (error) {
      console.error(error);

      setErrorMessage(serverErrorMessage);

      onOpen();
    }

    stopLoading();
  };
  const users = queryClient.getQueryData(`users`) as Users;
  const admins = users.filter((user) => user?.role === `admin`);
  const noSpaceForActions = useBreakpointValue({
    base: true,
    xl: false,
  });
  const { colorModeShadeInverted } = useColorModeShade(`red`);

  return (
    <Modal
      buttonProps={{
        isFullWidth: noSpaceForActions,
      }}
      headerIcon={FaTrashAlt}
      toggleButtonText={`Delete All`}
      toggleButtonColor={`red`}
      headerText={`Delete all users`}
      bodyHeadingText={`Warning!`}
      headingProps={{ color: colorModeShadeInverted, fontSize: 16 }}
      bodyText={
        `This action will delete all users with no way ` +
        `of reverting.. Are you sure?`
      }
      checkbox={currentUserIsAdmin && admins?.length > 1}
      checkboxText={`Delete other admins`}
      actionText={`Delete`}
      actionIcon={FaTrashAlt}
      onClick={deleteAllUsers}
      isLoading={isLoading}
      disclosure={disclosure}
      alertDisclosure={alertDisclosure}
      errorMessage={errorMessage}
    />
  );
};

export default DeleteAllUsersModal;
