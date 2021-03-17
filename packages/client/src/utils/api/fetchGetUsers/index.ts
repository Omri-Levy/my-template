import { axiosRequest } from '@my-template/shared';
import { FetchGetUsers } from './types';

const fetchGetUsers: FetchGetUsers = async () => {
  try {
    const { data } = await axiosRequest(
      `GET`,
      undefined,
      `getUsers`,
      undefined
    );

    return data?.users;
  } catch (error) {
    console.error(error);

    return [];
  }
};

export default fetchGetUsers;
