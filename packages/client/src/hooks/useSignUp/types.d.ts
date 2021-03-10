import { SignUpFormFields } from '../../components/pages/SignUp/types';
import { GRecaptchaResponse, SetError } from '../../utils/types';

type SignUp = (
  gRecaptchaResponse: GRecaptchaResponse
) => (data: SignUpFormFields) => Promise<void>;
type HookReturns = (setError: SetError) => SignUp;

export { SignUp, HookReturns };
