/**
 * TODO: update description
 */
import { useCallback } from 'react';
import { GetLocalStorage, HookReturns, SetLocalStorage } from './types';

/**
 * abstracted loading logic using react's useState for the isLoading
 * boolean, the startLoading function to set the state to true and the
 * stopLoading function to set the state to false.
 */
const useLocalStorage: HookReturns = (key) => {
  const setLocalStorage: SetLocalStorage = useCallback(
    (value) => {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key]
  );
  const getLocalStorage: GetLocalStorage = useCallback(
    (defaultValue) => () =>
      JSON.parse(localStorage.getItem(key) as string) || defaultValue,
    [key]
  );

  return {
    setLocalStorage,
    getLocalStorage,
  };
};

export default useLocalStorage;