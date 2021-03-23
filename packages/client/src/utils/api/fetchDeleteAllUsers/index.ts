import { axiosRequest } from '@my-template/shared';
import { FetchDeleteAllUsers } from './types';
import queryClient from '../../../components/globals/Providers/queryClient';

const fetchDeleteAllUsers: FetchDeleteAllUsers = async (deleteAdmins) => {
  try {
    const data = {
      deleteAdmins,
    };
    await axiosRequest(`DELETE`, undefined, `deleteUsers`, data);

    await queryClient.invalidateQueries(`users`);
  } catch (error) {
    console.error(error);
  }
};

export default fetchDeleteAllUsers;
