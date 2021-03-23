import { FunctionComponent, useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { FaTrashAlt } from 'react-icons/all';
import fetchDeleteAllUsers from '../../../../utils/api/fetchDeleteAllUsers';
import Modal from '../../../Modal';
import { DeleteAllUsers } from './types';

const DeleteAllUsersModal: FunctionComponent = () => {
  const disclosure = useDisclosure();
  const { isOpen } = disclosure;
  const [isLoading, setIsLoading] = useState(false);
  const deleteAllUsers: DeleteAllUsers = (onClose) => async () => {
    setIsLoading(true);
    await fetchDeleteAllUsers(isOpen);
    setTimeout(() => {
      setIsLoading(false);

      onClose();
    }, 5000);
  };

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
      checkbox
      checkboxText={`Delete other admins`}
      actionText={`Delete`}
      actionIcon={FaTrashAlt}
      onClick={deleteAllUsers}
      isLoading={isLoading}
      disclosure={disclosure}
    />
  );
};

export default DeleteAllUsersModal;
