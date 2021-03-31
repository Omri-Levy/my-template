import { useEffect } from 'react';
import { HookReturns } from './types';
import useCachedPageSize from '../useCachedPageSize';

/**
 * TODO: Update description
 */
const useUpdatePageSize: HookReturns = (pageSize) => {
  const { setPageSize } = useCachedPageSize();

  useEffect(() => {
    setPageSize(pageSize);
  }, [pageSize, setPageSize]);
};

export default useUpdatePageSize;
