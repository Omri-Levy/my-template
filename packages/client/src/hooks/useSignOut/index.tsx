import { fetch } from '@my-template/shared';
import { useHistory } from 'react-router-dom';
import { HookReturns, SignOut } from './types';
import useSuccessToast from '../useSuccessToast';

/**
 * a hook that takes all the steps required out order to sign out,
 * redirect and display the sign out toast.
 */
const useSignOut: HookReturns = () => {
  const { replace } = useHistory();
  const {
    toast: signOutToast,
    toastOptions: signOutToastOptions,
  } = useSuccessToast(`Signed out successfully.`);

  const signOut: SignOut = async () => {
    await fetch(`POST`, undefined, `signOut`);

    replace(`/signIn`, {
      toast: signOutToast(signOutToastOptions),
    });
  };

  return signOut;
};
export default useSignOut;
