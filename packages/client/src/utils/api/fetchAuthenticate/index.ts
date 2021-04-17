import { axiosRequest } from '@my-template/shared';
import { FetchAuthenticate } from './types';

const fetchAuthenticate: FetchAuthenticate = async () => {
  try {
    const { data } = await axiosRequest(`GET`, undefined, `authenticate`);

    return data?.user;
  } catch (error) {
    console.error(error);

    return `unauthenticated`;
  }
};

export default fetchAuthenticate;
