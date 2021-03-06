import { Data as DataType } from '@my-template/shared';
import { GRecaptchaResponse, Payload, SetError } from '../../utils/types';
import { SignUpFormFields } from '../../components/pages/SignUp/types';
import { SignInFormFields } from '../../components/pages/SignIn/types';

type Data = SignUpFormFields | SignInFormFields;

interface PostRequestData extends DataType {
  gRecaptchaResponse: GRecaptchaResponse;
}

type FetchAndAuthenticate = (data?: PostRequestData) => Promise<void>;
type OnSubmit = (
  gRecaptchaResponse: GRecaptchaResponse
) => (data: Payload) => Promise<void>;
type SignOut = () => Promise<void>;
type Endpoint = `signUp` | `signIn` | `signOut`;
type HookReturns = (
  endpoint: Endpoint,
  setError?: SetError
) => {
  onSubmit: OnSubmit;
  signOut: SignOut;
};

export { Data, FetchAndAuthenticate, OnSubmit, SignOut, Endpoint, HookReturns };
