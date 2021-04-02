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
interface UpdateUserPasswordFormFields {
  newPassword: string;
  newPasswordConfirmation: string;
}

/**
 * TODO: move types closer to their use(?)
 */
type UpdateProfile = () => (data: UpdateProfileFormFields) => Promise<void>;
type UpdatePassword = () => (data: UpdatePasswordFormFields) => Promise<void>;
type UpdateUserPassword = () => (
  data: UpdateUserPasswordFormFields
) => Promise<void>;

export {
  CurrentUserDetail,
  UpdateProfile,
  UpdatePassword,
  UpdateUserPasswordFormFields,
  UpdateUserPassword,
};
