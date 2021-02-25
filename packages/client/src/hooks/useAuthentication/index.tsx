import {
  emailAlreadyInUseMessage,
  fetch,
  wrongCredentialsMessage,
  serverErrorMessage,
} from '@my-template/shared';
import { useContext } from 'react';
import { FetchAndAuthenticate, HookReturns, SignOut, OnSubmit } from './types';
import AuthenticationContext from '../../context/Authentication/AuthenticationContext';

/**
 * a hook to share functionality across the signIn and signUp page.
 * chooses the right types and endpoint behind the scenes and invokes the
 * authenticate function.
 */
const useAuthentication: HookReturns = (endpoint, setError) => {
  const { authenticate } = useContext(AuthenticationContext);

  const fetchAndAuthenticate: FetchAndAuthenticate = async (data) => {
    await fetch(`POST`, undefined, endpoint, data);

    await authenticate();
  };
  const onSubmit: OnSubmit = (gRecaptchaResponse) => async (data) => {
    try {
      await fetchAndAuthenticate({ ...data, gRecaptchaResponse });
    } catch (err) {
      let errorMessage = err.response?.data.message;
      const isExpectedErrorMessage =
        errorMessage === wrongCredentialsMessage ||
        errorMessage === emailAlreadyInUseMessage;

      if (!isExpectedErrorMessage) {
        errorMessage = serverErrorMessage;
      }

      console.error(err);

      if (setError) {
        setError(`responseError`, {
          message: errorMessage,
        });
      }
    }
  };
  const signOut: SignOut = async () => {
    try {
      await fetchAndAuthenticate();
    } catch (err) {
      console.error(err);
    }

    if (window.location.href) {
      window.location.href = `/signIn`;
    }
  };

  return {
    onSubmit,
    signOut,
  };
};

export default useAuthentication;
