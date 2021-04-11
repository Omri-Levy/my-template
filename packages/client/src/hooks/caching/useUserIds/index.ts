import { useCallback, useEffect, useState } from 'react';
import { GetUserIds, HookReturns, ResetUserIds, SetUserIds } from './types';
import useSessionStorage from '../useSessionStorage';

/**
 * TODO: Update description
 */
const useUserIds: HookReturns = () => {
  const { getSessionStorage, setSessionStorage } = useSessionStorage(`userIds`);
  const setUserIds: SetUserIds = useCallback(
    (value: string[]) => {
      const uniqueValues = new Set(value);

      return setSessionStorage(Array.from(uniqueValues));
    },
    [setSessionStorage]
  );
  const getUserIds: GetUserIds = useCallback(() => {
    const uniqueUserIds = new Set(getSessionStorage([])() as string[]);

    return Array.from(uniqueUserIds);
  }, [getSessionStorage]);
  const resetUserIds: ResetUserIds = useCallback(() => {
    setUserIds([]);
  }, [setUserIds]);
  const [userIds, _setUserIds] = useState(() => getUserIds());

  useEffect(() => {
    _setUserIds(userIds);
  }, [userIds, setUserIds]);

  return {
    setUserIds,
    getUserIds,
    resetUserIds,
    userIds,
    _setUserIds,
  };
};

export default useUserIds;
