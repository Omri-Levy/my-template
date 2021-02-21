import { fetch } from '@my-template/shared';
import { FetchAndAuthenticate, HookReturns, OnClick, OnSubmit } from './types';
import { useContext } from 'react';
import AuthenticationContext
  from '../../context/Authentication/AuthenticationContext';

/*
* a hook to share functionality across the signIn and signUp page.
* chooses the right types and endpoint behind the scenes and invokes the
*  authenticate function.
* */
const useAuthentication: HookReturns = (endpoint) => {
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
      await fetchAndAuthenticate({ ...data, gRecaptchaResponse });
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
