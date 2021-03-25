import { axiosRequest } from '@my-template/shared';
import { FetchDeleteAllUsers } from './types';
import queryClient from '../../../components/globals/Providers/queryClient';

const fetchDeleteAllUsers: FetchDeleteAllUsers = async (deleteAdmins) => {
  const data = {
    deleteAdmins,
  };
  await axiosRequest(`DELETE`, undefined, `deleteAllUsers`, data);

  await queryClient.invalidateQueries(`users`);
};

export default fetchDeleteAllUsers;
