import { emailAlreadyInUseMessage, fetch } from '@my-template/shared';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HookReturns, SignUp } from './types';
import setResponseError from '../../../components/forms/FormResponseError/setResponseError';
import {
  resetSignUpFormDetails,
  setSignUpFormDetails,
} from '../../../redux/reducer';
import useSuccessToast from '../../ui/useSuccessToast';

/**
 * a hook that takes all the steps required in order to sign up,
 * handle sign up errors, redirect and display the sign up toast.
 */
const useSignUp: HookReturns = (setError) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const { push } = useHistory();
  const {
    toast: signUpToast,
    toastOptions: signUpToastOptions,
  } = useSuccessToast(`Your new account has been created successfully.`);

  const signUp: SignUp = (gRecaptchaResponse) => async (data) => {
    try {
      dispatch(setSignUpFormDetails(data));

      await fetch(`POST`, undefined, `signUp`, {
        ...store,
        gRecaptchaResponse,
      });

      dispatch(resetSignUpFormDetails());

      push(`/signIn`, {
        toast: signUpToast(signUpToastOptions),
      });
    } catch (error) {
      console.error(error);

      setResponseError(error, setError, [emailAlreadyInUseMessage]);
    }
  };

  return signUp;
};
export default useSignUp;
