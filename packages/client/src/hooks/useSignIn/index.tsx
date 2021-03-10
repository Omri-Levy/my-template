import { fetch, wrongCredentialsMessage } from '@my-template/shared';
import { useHistory } from 'react-router-dom';
import { HookReturns, SignIn } from './types';
import setResponseError from '../../components/forms/FormResponseError/setResponseError';
import useSuccessToast from '../useSuccessToast';

/**
 * a hook that takes all the steps required in order to sign in,
 * handle sign in errors, redirect and display the sign in toast.
 */
const useSignIn: HookReturns = (setError) => {
  const { replace } = useHistory();
  const {
    toast: signInToast,
    toastOptions: signInToastOptions,
  } = useSuccessToast(`Signed in successfully.`);

  const signIn: SignIn = (gRecaptchaResponse) => async (data) => {
    try {
      await fetch(`POST`, undefined, `signIn`, {
        ...data,
        gRecaptchaResponse,
      });

      replace(`/`, {
        toast: signInToast(signInToastOptions),
      });
    } catch (error) {
      console.error(error);

      setResponseError(error, setError, [wrongCredentialsMessage]);
    }
  };

  return signIn;
};
export default useSignIn;
