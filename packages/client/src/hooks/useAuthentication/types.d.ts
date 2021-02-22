import { GRecaptchaResponse, SetState } from '../../utils/types';
import { Data as DataType } from '@my-template/shared';
import { SignUpFormFields } from '../../components/SignUp/types';
import { SignInFormFields } from '../../components/SignIn/types';
import { useForm } from 'react-hook-form';

type Data = SignUpFormFields | SignInFormFields;
interface FetchAndAuthenticateData extends DataType {
  gRecaptchaResponse: GRecaptchaResponse;
}

type FetchAndAuthenticate = (data?: FetchAndAuthenticateData) => Promise<void>;
type OnSubmit = (gRecaptchaResponse: GRecaptchaResponse) =>
    (data: Data) =>  Promise<void>;
type OnClick = () =>  Promise<void>;
type Endpoint = `signUp` | `signIn` | `signOut`;
type HookReturns = (endpoint: Endpoint, setError?: useForm.setError) => {
  onSubmit: OnSubmit,
  onClick: OnClick,
};

export {Data, FetchAndAuthenticate, OnSubmit, OnClick, Endpoint, HookReturns};
