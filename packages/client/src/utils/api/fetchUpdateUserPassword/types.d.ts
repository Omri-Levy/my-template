import { UpdateUserPasswordFormFields } from '../../../components/pages/Profile/types';

type FetchUpdateUserPassword = (
  userId: string,
  data: UpdateUserPasswordFormFields
) => Promise<void>;

export { FetchUpdateUserPassword };
