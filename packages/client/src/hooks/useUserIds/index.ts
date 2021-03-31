import { useCallback, useEffect, useState } from 'react';
import { GetUserIds, HookReturns, ResetUserIds, SetUserIds } from './types';
import useSessionStorage from '../useSessionStorage';

/**
 * TODO: Update description
 */
const useUserIds: HookReturns = () => {
  const { getSessionStorage, setSessionStorage } = useSessionStorage(`userIds`);
  const setUserIds: SetUserIds = useCallback(
    (value: string[]) => setSessionStorage(value),
    [setSessionStorage]
  );
  const getUserIds: GetUserIds = () => getSessionStorage([false])();
  const resetUserIds: ResetUserIds = () => {
    setUserIds([]);
  };
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
