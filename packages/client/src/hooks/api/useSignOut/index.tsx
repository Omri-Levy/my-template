import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { axiosRequest } from '@my-template/shared';
import { HookReturns, SignOut } from './types';
import useSuccessToast from '../../ui/useSuccessToast';
import AuthenticationContext from '../../../context/AuthenticationContext/AuthenticationContext';
import useUserIds from '../../caching/useUserIds';
import useInfoToast from '../../ui/useInfoToast';

/**
 * a hook that takes all the steps required out order to sign out,
 * redirect and display the sign out toast.
 */
const useSignOut: HookReturns = () => {
  const { authenticate, isAuthenticated } = useContext(AuthenticationContext);
  const { replace } = useHistory();
  const { activateToast: activateSignOutToast } = useSuccessToast(
    `signOut`,
    `Signed out successfully.`
  );
  const { activateToast: activateInactiveSignOutToast } = useInfoToast(
    `signOut`,
    `Signed out automatically due to inactivity.`
  );
  const { resetUserIds } = useUserIds();
  const sharedSignOutLogic = async (inactivity?: boolean) => {
    try {
      if (!isAuthenticated) {
        return;
      }

      await axiosRequest(`POST`, undefined, `signOut`);

      resetUserIds();

      await authenticate();

      replace(`/signIn`, {
        toast: inactivity
          ? activateInactiveSignOutToast()
          : activateSignOutToast(),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const signOut: SignOut = async () => {
    await sharedSignOutLogic();
  };

  const inactivitySignOut: SignOut = async () => {
    await sharedSignOutLogic(true);
  };

  return { signOut, inactivitySignOut };
};

export default useSignOut;
