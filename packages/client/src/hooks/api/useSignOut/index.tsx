import { fetch } from '@my-template/shared';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { HookReturns, SignOut } from './types';
import useSuccessToast from '../../ui/useSuccessToast';
import AuthenticationContext from '../../../context/AuthenticationContext/AuthenticationContext';

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
    await fetch(`POST`, undefined, `signOut`);

    await authenticate();

    replace(`/signIn`, {
      toast: signOutToast(signOutToastOptions),
    });
  };

  return signOut;
};
export default useSignOut;
