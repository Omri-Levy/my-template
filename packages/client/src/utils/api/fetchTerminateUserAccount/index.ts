import { axiosRequest } from '@my-template/shared';
import { FetchTerminateUserAccount } from './types';

const fetchTerminateUserAccount: FetchTerminateUserAccount = async () => {
  try {
    await axiosRequest(`DELETE`, undefined, `terminateUserAccount`);
  } catch (error) {
    console.error(error);
  }
};

export default fetchTerminateUserAccount;
