import { axiosRequest } from '@my-template/shared';
import { FetchAuthorize } from './types';

const fetchAuthorize: FetchAuthorize = async () => {
  try {
    await axiosRequest(`GET`, undefined, `authorize`, undefined);

    return true;
  } catch (error) {
    console.error(error);

    return false;
  }
};

export default fetchAuthorize;
