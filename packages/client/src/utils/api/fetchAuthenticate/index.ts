import { axiosRequest } from '@my-template/shared';
import { FetchAuthenticate } from './types';

const fetchAuthenticate: FetchAuthenticate = async () => {
  const { data } = await axiosRequest(
    `GET`,
    undefined,
    `authenticate`,
    undefined
  );

  return data?.user;
};

export default fetchAuthenticate;
