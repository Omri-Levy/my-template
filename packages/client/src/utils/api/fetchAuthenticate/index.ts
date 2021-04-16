import { axiosRequest } from '@my-template/shared';
import { FetchAuthenticate } from './types';

const fetchAuthenticate: FetchAuthenticate = async () => {
  const { data } = await axiosRequest(`GET`, undefined, `authenticate`);

  return data?.user || `unauthenticated`;
};

export default fetchAuthenticate;
