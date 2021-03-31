import { HookReturns, SetPageSize } from './types';
import useLocalStorage from '../useLocalStorage';

/**
 * TODO: Update description
 */
const useCachedPageSize: HookReturns = () => {
  const { setLocalStorage, getLocalStorage } = useLocalStorage(`pageSize`);
  const getLocalStoragePageSize = getLocalStorage(10);
  const cachedPageSize = getLocalStoragePageSize() as number;
  const setPageSize: SetPageSize = (pageSize) => {
    setLocalStorage(pageSize);
  };

  return {
    setPageSize,
    cachedPageSize,
  };
};

export default useCachedPageSize;
