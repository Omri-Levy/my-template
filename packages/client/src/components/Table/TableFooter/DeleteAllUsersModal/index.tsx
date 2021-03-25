import { FunctionComponent, useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { FaTrashAlt } from 'react-icons/all';
import { serverErrorMessage, Users } from '@my-template/shared';
import fetchDeleteAllUsers from '../../../../utils/api/fetchDeleteAllUsers';
import Modal from '../../../Modal';
import { DeleteAllUsers } from './types';
import queryClient from '../../../globals/Providers/queryClient';
import useSuccessToast from '../../../../hooks/ui/useSuccessToast';

const DeleteAllUsersModal: FunctionComponent = () => {
  const disclosure = useDisclosure();
  const alertDisclosure = useDisclosure();
  const { onOpen } = alertDisclosure;
  const { isOpen } = disclosure;
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(``);
  const {
    toast: deleteAllUsersSuccessToast,
    toastOptions: deleteAllUsersSuccessToastOptions,
  } = useSuccessToast(`Deleted all users successfully.`);
  const deleteAllUsers: DeleteAllUsers = (onClose) => async () => {
    try {
      setIsLoading(true);
      await fetchDeleteAllUsers(isOpen);

      onClose();

      deleteAllUsersSuccessToast(deleteAllUsersSuccessToastOptions);
    } catch (error) {
      console.error(error);

      setErrorMessage(serverErrorMessage);

      onOpen();
    }

    setIsLoading(false);
  };
  const users = queryClient.getQueryData(`users`) as Users;
  const admins = users.filter((user) => user.role === `admin`);

  return (
    <Modal
      toggleButtonText={`Delete All`}
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
