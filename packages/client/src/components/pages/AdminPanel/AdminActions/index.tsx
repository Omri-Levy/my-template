import { FunctionComponent } from 'react';
import { Button, Icon } from '@chakra-ui/react';
import { FaTrashAlt } from 'react-icons/all';
import { deleteSelectedUsersMessage, Users } from '@my-template/shared';
import DeleteAllUsersModal from '../../../Table/TableFooter/DeleteAllUsersModal';
import useLoading from '../../../../hooks/useLoading';
import useSuccessToast from '../../../../hooks/ui/useSuccessToast';
import useErrorToast from '../../../../hooks/ui/useErrorToast';
import { DeleteUser } from '../../../Table/TableFooter/types';
import fetchDeleteUser from '../../../../utils/api/fetchDeleteUser';
import queryClient from '../../../globals/Providers/queryClient';
import { Props } from './types';
import UpdateUserProfileForm from './UpdateUserProfileForm';

const AdminActions: FunctionComponent<Props> = ({
  icons = true,
  ids: userIds,
  checkedItems,
}) => {
  const { isLoading, startLoading, stopLoading } = useLoading();
  const {
    toast: deleteSelectedUsersSuccessToast,
    toastOptions: deleteSelectedUsersSuccessToastOptions,
  } = useSuccessToast(`Deleted selected users successfully.`);
  const {
    toast: deleteSelectedUsersErrorToast,
    toastOptions: deleteSelectedUsersErrorToastOptions,
  } = useErrorToast(`Deleting selected users failed - please try again.`);
  /**
   * TODO: abstract this function
   */
  const deleteSelectedUsers: DeleteUser = async () => {
    try {
      startLoading();
      await fetchDeleteUser(userIds);

      deleteSelectedUsersSuccessToast(deleteSelectedUsersSuccessToastOptions);
    } catch (error) {
      console.error(error);

      deleteSelectedUsersErrorToast(deleteSelectedUsersErrorToastOptions);
    }

    stopLoading();
  };
  const users = queryClient.getQueryData(`users`) as Users;

  return (
    <>
      <UpdateUserProfileForm userIds={userIds} />
      <Button
        rightIcon={icons ? <Icon as={FaTrashAlt} mb={0.5} /> : undefined}
        onClick={userIds.length > 0 ? deleteSelectedUsers : undefined}
        disabled={!checkedItems.some(Boolean)}
        isLoading={isLoading}
        title={
          !checkedItems.some(Boolean) ? deleteSelectedUsersMessage : undefined
        }
      >
        Delete Selected
      </Button>
      {users?.length > 1 && <DeleteAllUsersModal />}
    </>
  );
};

export default AdminActions;
