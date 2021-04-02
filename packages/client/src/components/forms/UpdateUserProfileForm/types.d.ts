import { UpdateProfileFormFields } from '../FormFields/UpdateProfileFormFields/types';

interface Props {
  userIds: string[];
}
type UpdateUserProfile = () => (data: UpdateProfileFormFields) => Promise<void>;

export { Props, UpdateUserProfile };
