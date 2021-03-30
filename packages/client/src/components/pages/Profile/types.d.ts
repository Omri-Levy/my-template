import { FunctionComponent } from 'react';
import { UserKey } from '@my-template/shared';

interface CurrentUserDetail {
  objectKey: UserKey;
  text: string;
  icon: FunctionComponent;
}
interface UpdateProfileFormFields {
  firstName: string;
  lastName: string;
  email: string;
}
interface UpdatePasswordFormFields {
  oldPassword: string;
  newPassword: string;
  newPasswordConfirmation: string;
}
type UpdateProfile = () => (data: UpdateProfileFormFields) => Promise<void>;
type UpdatePassword = () => (data: UpdatePasswordFormFields) => Promise<void>;

export { CurrentUserDetail, UpdateProfile, UpdatePassword };
