import {
  emailAlreadyInUseMessage,
  fetch,
  wrongCredentialsMessage,
} from '@my-template/shared';
import { useContext } from 'react';
import { useStateMachine } from 'little-state-machine';
import { useHistory } from 'react-router-dom';
import { FetchAndAuthenticate, HookReturns, OnSubmit, SignOut } from './types';
import AuthenticationContext from '../../context/Authentication/AuthenticationContext';
import setResponseError from '../../components/forms/FormResponseError/setResponseError';
import updateAction from '../../components/globals/Providers/updateAction';
import initialState from '../../components/globals/Providers/initialState';

/**
 * a hook to share functionality across the signIn and signUp page.
 * chooses the right types and endpoint behind the scenes and invokes the
 * authenticate function.
 */
const useAuthentication: HookReturns = (endpoint, setError) => {
  const { authenticate } = useContext(AuthenticationContext);
  const { state, actions } = useStateMachine({ updateAction });
  const { push, replace } = useHistory();

  const fetchAndAuthenticate: FetchAndAuthenticate = async (data) => {
    await fetch(`POST`, undefined, endpoint, data);

    await authenticate();

    if (endpoint === `signUp`) {
      actions.updateAction(initialState);

      push(`/signIn`);
    }
  };
  const onSubmit: OnSubmit = (gRecaptchaResponse) => async (data) => {
    try {
      let dataOrState = data;

      if (endpoint === `signUp`) {
        actions.updateAction(data);
        dataOrState = {
          ...state,
        };
      }

      await fetchAndAuthenticate({
        ...dataOrState,
        gRecaptchaResponse,
      });
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

    replace(`/signIn`);
  };

  return {
    onSubmit,
    signOut,
  };
};
export default useAuthentication;
