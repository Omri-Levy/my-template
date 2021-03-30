import { axiosRequest } from '@my-template/shared';
import { FetchUpdatePassword } from './types';

const fetchUpdatePassword: FetchUpdatePassword = async (data) => {
  await axiosRequest(`POST`, undefined, `updatePassword`, data);
};

export default fetchUpdatePassword;
