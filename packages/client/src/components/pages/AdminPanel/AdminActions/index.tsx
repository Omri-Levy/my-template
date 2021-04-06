import { FunctionComponent } from 'react';
import { Button, Icon } from '@chakra-ui/react';
import { FaTrashAlt } from 'react-icons/fa';
import {
  deleteSelectedUsersMessage,
  unauthorizedMessage,
  Users,
} from '@my-template/shared';
import DeleteAllUsersModal from '../../../Table/TableFooter/DeleteAllUsersModal';
import useLoading from '../../../../hooks/useLoading';
import useSuccessToast from '../../../../hooks/ui/useSuccessToast';
import useErrorToast from '../../../../hooks/ui/useErrorToast';
import { DeleteUser } from '../../../Table/TableFooter/types';
import fetchDeleteUser from '../../../../utils/api/fetchDeleteUser';
import queryClient from '../../../globals/Providers/queryClient';
import { Props } from './types';
import UpdateUserProfileForm from '../../../forms/UpdateUserProfileForm';
import useIsAdmin from '../../../../hooks/useIsAdmin';
import UpdateUserPasswordForm from '../../../forms/UpdateUserPasswordForm';
import useColorModeShade from '../../../../hooks/useColorModeShade';

/**
 * TODO: refactor to controller pattern
 */
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
  const {
    toast: unauthorizedErrorToast,
    toastOptions: unauthorizedErrorToastOptions,
  } = useErrorToast(unauthorizedMessage);
  const isAdmin = useIsAdmin();
  /**
   * TODO: abstract this function
   */
  const deleteSelectedUsers: DeleteUser = async () => {
    try {
      if (!isAdmin) {
        console.error(unauthorizedMessage);

        unauthorizedErrorToast(unauthorizedErrorToastOptions);

        return;
      }

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
  const { colorModeShadeInverted } = useColorModeShade(`red`);

  return (
    <>
      <UpdateUserProfileForm userIds={userIds} />
      <UpdateUserPasswordForm userIds={userIds} />
      <Button
        rightIcon={icons ? <Icon as={FaTrashAlt} mb={0.5} /> : undefined}
        onClick={userIds.length > 0 ? deleteSelectedUsers : undefined}
        disabled={!checkedItems.some(Boolean)}
        isLoading={isLoading}
        title={
          !checkedItems.some(Boolean) ? deleteSelectedUsersMessage : undefined
        }
        border={`2px solid`}
        borderColor={colorModeShadeInverted}
      >
        Delete Selected
      </Button>
      {users?.length > 1 && <DeleteAllUsersModal />}
    </>
  );
};

export default AdminActions;
