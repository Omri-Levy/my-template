import { useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { State } from '../../components/pages/SignIn/types';
import { HookReturns } from './types';

const useRenderToast: HookReturns = (toastRef) => {
  const { location, replace } = useHistory();
  const { pathname } = useLocation();
  const isMounted = useRef(true);
  const state = location.state as State;

  useEffect(() => {
    if (isMounted && toastRef.current) {
      replace(pathname, {});
    }

    return () => {
      isMounted.current = false;
    };
  }, [pathname, replace, state.toast, toastRef]);

  return state?.toast;
};

export default useRenderToast;
