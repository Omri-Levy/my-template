import {
  emailAlreadyInUseMessage,
  fetch,
  wrongCredentialsMessage,
} from '@my-template/shared';
import { useContext } from 'react';
import { FetchAndAuthenticate, HookReturns, OnSubmit, SignOut } from './types';
import AuthenticationContext from '../../context/Authentication/AuthenticationContext';
import setResponseError from '../../components/forms/FormResponseError/setResponseError';

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
    } catch (error) {
      console.error(error);

      setResponseError(error, setError, [
        wrongCredentialsMessage,
        emailAlreadyInUseMessage,
      ]);
    }
  };
  const signOut: SignOut = async () => {
    await fetchAndAuthenticate();

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
