import {
  emailAlreadyInUseMessage,
  fetch,
  wrongCredentialsMessage
} from '@my-template/shared';
import { FetchAndAuthenticate, HookReturns, OnClick, OnSubmit } from './types';
import { useContext } from 'react';
import AuthenticationContext
  from '../../context/Authentication/AuthenticationContext';
import { serverErrorMessage } from '@my-template/shared';

/*
* a hook to share functionality across the signIn and signUp page.
* chooses the right types and endpoint behind the scenes and invokes the
*  authenticate function.
* */
const useAuthentication: HookReturns = (endpoint, setError
) => {
  const { authenticate } = useContext(AuthenticationContext);

  const fetchAndAuthenticate: FetchAndAuthenticate = async (data) => {

    await fetch(
      `POST`,
      undefined,
      endpoint,
      data
    );

    await authenticate();

    if (endpoint === `signOut`) {
      window.location.href = `/signIn`;
    }
  };
  const onSubmit: OnSubmit = (gRecaptchaResponse) => async (data) => {
    try {
      await fetchAndAuthenticate({ ...data, gRecaptchaResponse });
    } catch (err) {
      let errorMessage = err.response?.data.message;
      const isExpectedErrorMessage = errorMessage === wrongCredentialsMessage ||
        errorMessage === emailAlreadyInUseMessage ;

      if (!isExpectedErrorMessage) {
        errorMessage = serverErrorMessage;
      }

      console.error(err);

      setError && setError(`responseError`, {
        message: errorMessage,
      });
    }
    };
  const onClick: OnClick = async () => {
    try {
      await fetchAndAuthenticate();
    } catch (err) {
      console.error(err);
    }
  };

  return {
    onSubmit,
    onClick,
  };
};

export default useAuthentication;
