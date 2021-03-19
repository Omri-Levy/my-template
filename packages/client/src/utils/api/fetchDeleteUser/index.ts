import { axiosRequest } from '@my-template/shared';
import { FetchDeleteUser } from './types';
import queryClient from '../../../components/globals/Providers/queryClient';

const fetchDeleteUser: FetchDeleteUser = async (userIds) => {
  try {
    const data = {
      userIds
    };
    await axiosRequest(`DELETE`, undefined, `deleteUser`, data);

    await queryClient.invalidateQueries(`users`);
  } catch (error) {
    console.error(error);
  }
};

export default fetchDeleteUser;
