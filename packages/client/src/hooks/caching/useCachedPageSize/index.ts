import { useCallback } from 'react';
import { HookReturns, SetPageSize } from './types';
import useLocalStorage from '../useLocalStorage';

/**
 * TODO: Update description
 */
const useCachedPageSize: HookReturns = () => {
  const { setLocalStorage, getLocalStorage } = useLocalStorage(`pageSize`);
  const getLocalStoragePageSize = getLocalStorage(10);
  const cachedPageSize = getLocalStoragePageSize() as number;
  const setPageSize: SetPageSize = useCallback(
    (pageSize) => {
      setLocalStorage(pageSize);
    },
    [setLocalStorage]
  );

  return {
    setPageSize,
    cachedPageSize,
  };
};

export default useCachedPageSize;
