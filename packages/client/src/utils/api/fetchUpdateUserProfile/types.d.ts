import { UpdateProfileFormFields } from '../../../components/forms/FormFields/UpdateProfileFormFields/types';

type FetchUpdateUserProfile = (
  userId: string,
  data: UpdateProfileFormFields
) => Promise<void>;

export { FetchUpdateUserProfile };
