import { axiosRequest } from '@my-template/shared';
import { FetchTerminateUserAccount } from './types';

const fetchTerminateUserAccount: FetchTerminateUserAccount = async () => {
  await axiosRequest(`DELETE`, undefined, `terminateUserAccount`);
};

export default fetchTerminateUserAccount;
