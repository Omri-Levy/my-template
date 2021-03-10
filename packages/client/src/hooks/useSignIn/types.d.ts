import { SignInFormFields } from '../../components/pages/SignIn/types';
import { GRecaptchaResponse, SetError } from '../../utils/types';

type SignIn = (
  gRecaptchaResponse: GRecaptchaResponse
) => (data: SignInFormFields) => Promise<void>;
type HookReturns = (setError: SetError) => SignIn;

export { SignIn, HookReturns };
