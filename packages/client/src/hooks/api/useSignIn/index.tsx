import { axiosRequest, wrongCredentialsMessage } from '@my-template/shared';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { HookReturns, SignIn } from './types';
import setResponseError from '../../../components/forms/FormResponseError/setResponseError';
import useSuccessToast from '../../ui/useSuccessToast';
import AuthenticationContext from '../../../context/AuthenticationContext/AuthenticationContext';

/**
 * a hook that takes all the steps required in order to sign in,
 * handle sign in errors, redirect and display the sign in toast.
 */
const useSignIn: HookReturns = (setError) => {
  const { authenticate } = useContext(AuthenticationContext);
  const { replace } = useHistory();
  const { activateToast } = useSuccessToast(
    `signIn`,
    `Signed in successfully.`
  );

  const signIn: SignIn = (gRecaptchaResponse) => async (data) => {
    try {
      await axiosRequest(`POST`, undefined, `signIn`, {
        ...data,
        gRecaptchaResponse,
      });
      await authenticate();

      replace(`/`, {
        toast: activateToast(),
      });
    } catch (error) {
      console.error(error);

      setResponseError(error, setError, [
        wrongCredentialsMessage(error.response?.data.attemptsLeft),
      ]);
    }
  };

  return signIn;
};

export default useSignIn;
