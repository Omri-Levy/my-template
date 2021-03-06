import {
  emailAlreadyInUseMessage,
  fetch,
  wrongCredentialsMessage,
} from '@my-template/shared';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FetchAndAuthenticate, HookReturns, OnSubmit, SignOut } from './types';
import AuthenticationContext from '../../context/Authentication/AuthenticationContext';
import setResponseError from '../../components/forms/FormResponseError/setResponseError';
import {
  resetSignUpFormDetails,
  setSignUpFormDetails,
} from '../../redux/reducer';

/**
 * a hook to share functionality across the signIn and signUp page.
 * chooses the right types and endpoint behind the scenes and invokes the
 * authenticate function.
 */
const useAuthentication: HookReturns = (endpoint, setError) => {
  const { authenticate } = useContext(AuthenticationContext);
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const { push, replace } = useHistory();

  const fetchAndAuthenticate: FetchAndAuthenticate = async (data) => {
    await fetch(`POST`, undefined, endpoint, data);

    await authenticate();

    if (endpoint === `signUp`) {
      dispatch(resetSignUpFormDetails());

      push(`/signIn`);
    }
  };
  const onSubmit: OnSubmit = (gRecaptchaResponse) => async (data) => {
    try {
      let dataOrState = data;

      if (endpoint === `signUp`) {
        dispatch(setSignUpFormDetails(data));

        dataOrState = {
          ...store,
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
