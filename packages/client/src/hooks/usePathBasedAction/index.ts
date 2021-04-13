import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HookReturns } from './types';

/**
 * TODO: Update description
 */
const usePathBasedAction: HookReturns = (regex, action) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (regex.test(pathname)) {
      console.log({ pathname, regex });
      action();
    }
  }, [pathname, action, regex]);
};

export default usePathBasedAction;
