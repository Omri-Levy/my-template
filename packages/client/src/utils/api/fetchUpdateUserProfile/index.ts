import { axiosRequest } from '@my-template/shared';
import { FetchUpdateUserProfile } from './types';

const fetchUpdateUserProfile: FetchUpdateUserProfile = async (userId, data) => {
  await axiosRequest(`POST`, undefined, `updateUserProfile`, data, userId);
};

export default fetchUpdateUserProfile;
