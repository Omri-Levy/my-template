import { FunctionComponent } from 'react';

interface CurrentUserDetail {
  objectKey: string;
  text: string;
  icon: FunctionComponent;
}
interface UpdateProfileFormFields {
  firstName: string;
  lastName: string;
  email: string;
}
type UpdateProfile = () => (data: UpdateProfileFormFields) => Promise<void>;

export { CurrentUserDetail, UpdateProfile };
