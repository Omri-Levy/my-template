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
  };
  const onSubmit: OnSubmit = (gRecaptchaResponse) => async (data) => {
    try {
      await fetchAndAuthenticate({ ...data, gRecaptchaResponse });
    } catch (err) {
      const errorMessage = err.response.data.message;
      const isExpectedErrorMessage = errorMessage === wrongCredentialsMessage ||
        errorMessage === emailAlreadyInUseMessage ;

      console.error(err);

      setError && setError(`responseError`, {
        message: errorMessage === isExpectedErrorMessage ? errorMessage :
          serverErrorMessage
      });
    }
    };
  const onClick: OnClick = async () => {
    await fetchAndAuthenticate();
  };

  return {
    onSubmit,
    onClick,
  };
};

export default useAuthentication;
