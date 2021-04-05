import { FunctionComponent, useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { FaTrashAlt } from 'react-icons/fa';
import { serverErrorMessage, Users } from '@my-template/shared';
import fetchDeleteAllUsers from '../../../../utils/api/fetchDeleteAllUsers';
import Modal from '../../../Modal';
import { DeleteAllUsers } from './types';
import queryClient from '../../../globals/Providers/queryClient';
import useSuccessToast from '../../../../hooks/ui/useSuccessToast';
import useLoading from '../../../../hooks/useLoading';

const DeleteAllUsersModal: FunctionComponent = () => {
  const disclosure = useDisclosure();
  const alertDisclosure = useDisclosure();
  const { onOpen } = alertDisclosure;
  const { isOpen } = disclosure;
  const { isLoading, stopLoading, startLoading } = useLoading();
  const [errorMessage, setErrorMessage] = useState(``);
  const {
    toast: deleteAllUsersSuccessToast,
    toastOptions: deleteAllUsersSuccessToastOptions,
  } = useSuccessToast(`Deleted all users successfully.`);
  /**
   * TODO: abstract this function
   */
  const deleteAllUsers: DeleteAllUsers = (onClose) => async () => {
    try {
      startLoading();
      await fetchDeleteAllUsers(isOpen);

      onClose();

      deleteAllUsersSuccessToast(deleteAllUsersSuccessToastOptions);
    } catch (error) {
      console.error(error);

      setErrorMessage(serverErrorMessage);

      onOpen();
    }

    stopLoading();
  };
  const users = queryClient.getQueryData(`users`) as Users;
  const admins = users.filter((user) => user.role === `admin`);

  return (
    <Modal
      headerIcon={FaTrashAlt}
      toggleButtonText={`Delete All`}
      toggleButtonColor={`red`}
      headerText={`Delete all users`}
      bodyHeadingText={`Warning!`}
      headingProps={{ color: `red.300`, fontSize: 16 }}
      bodyText={
        `This action will delete all users with no way ` +
        `of reverting.. Are you sure?`
      }
      checkbox={admins.length > 1}
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
