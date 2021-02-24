import { GRecaptchaResponse } from '../../utils/types';
import { Data as DataType } from '@my-template/shared';
import { SignUpFormFields } from '../../components/SignUp/types';
import { SignInFormFields } from '../../components/SignIn/types';
import { useForm } from 'react-hook-form';

type Data = SignUpFormFields | SignInFormFields;
interface PostRequestData extends DataType {
  gRecaptchaResponse: GRecaptchaResponse;
}

type FetchAndAuthenticate = (data?: PostRequestData) => Promise<void>;
type OnSubmit = (gRecaptchaResponse: GRecaptchaResponse) =>
    (data: Data) => Promise<void>;
type SignOut = () => Promise<void>;
type Endpoint = `signUp` | `signIn` | `signOut`;
type HookReturns = (endpoint: Endpoint, setError?: useForm.setError) => {
  onSubmit: OnSubmit,
  signOut: SignOut,
};

export {Data, FetchAndAuthenticate, OnSubmit, SignOut, Endpoint, HookReturns};
