import { axiosRequest } from '@my-template/shared';
import { FetchDeleteUser } from './types';
import queryClient from '../../../components/globals/Providers/queryClient';

const fetchDeleteSelectedUsers: FetchDeleteUser = async (userIds) => {
  const data = {
    userIds,
  };
  await axiosRequest(`DELETE`, undefined, `deleteSelectedUsers`, data);

  await queryClient.invalidateQueries(`users`);
};

export default fetchDeleteSelectedUsers;
