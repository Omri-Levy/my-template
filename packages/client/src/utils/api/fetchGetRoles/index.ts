import { axiosRequest } from '@my-template/shared';
import { FetchGetRoles } from './types';

const fetchGetRoles: FetchGetRoles = async () => {
  try {
    const { data } = await axiosRequest(
      `GET`,
      undefined,
      `getRoles`,
      undefined
    );

    return data?.roles;
  } catch (error) {
    console.error(error);

    return [];
  }
};

export default fetchGetRoles;
