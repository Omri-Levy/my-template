import { axiosRequest } from '@my-template/shared';
import { FetchUpdateProfile } from './types';

const fetchUpdateProfile: FetchUpdateProfile = async (data) => {
  await axiosRequest(`POST`, undefined, `updateProfile`, data);
};

export default fetchUpdateProfile;
