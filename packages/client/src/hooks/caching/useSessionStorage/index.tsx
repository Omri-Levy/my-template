/**
 * TODO: update description
 */
import { useCallback } from 'react';
import { GetSessionStorage, HookReturns, SetSessionStorage } from './types';

/**
 * abstracted loading logic using react's useState for the isLoading
 * boolean, the startLoading function to set the state to true and the
 * stopLoading function to set the state to false.
 */
const useSessionStorage: HookReturns = (key) => {
  const setSessionStorage: SetSessionStorage = useCallback(
    (value) => {
      sessionStorage.setItem(key, JSON.stringify(value));
    },
    [key]
  );
  const getSessionStorage: GetSessionStorage = useCallback(
    (defaultValue) => () =>
      JSON.parse(sessionStorage.getItem(key) as string) || defaultValue,
    [key]
  );

  return {
    setSessionStorage,
    getSessionStorage,
  };
};

export default useSessionStorage;
