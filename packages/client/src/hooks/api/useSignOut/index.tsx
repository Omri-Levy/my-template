import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { axiosRequest } from '@my-template/shared';
import { HookReturns, SignOut } from './types';
import useSuccessToast from '../../ui/useSuccessToast';
import AuthenticationContext from '../../../context/AuthenticationContext/AuthenticationContext';
import resetSensitiveSessionStorage from '../../../utils/functions/resetSensitiveSessionStorage';

/**
 * a hook that takes all the steps required out order to sign out,
 * redirect and display the sign out toast.
 */
const useSignOut: HookReturns = () => {
  const { authenticate } = useContext(AuthenticationContext);
  const { replace } = useHistory();
  const {
    toast: signOutToast,
    toastOptions: signOutToastOptions,
  } = useSuccessToast(`Signed out successfully.`);

  const signOut: SignOut = async () => {
    try {
      await axiosRequest(`POST`, undefined, `signOut`);

      resetSensitiveSessionStorage();

      await authenticate();

      replace(`/signIn`, {
        toast: signOutToast(signOutToastOptions),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return signOut;
};

export default useSignOut;
