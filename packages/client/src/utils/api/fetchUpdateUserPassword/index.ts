import { axiosRequest } from '@my-template/shared';
import { FetchUpdateUserPassword } from './types';

const fetchUpdateUserPassword: FetchUpdateUserPassword = async (
  userId,
  data
) => {
  await axiosRequest(`POST`, undefined, `updateUserPassword`, data, userId);
};

export default fetchUpdateUserPassword;
