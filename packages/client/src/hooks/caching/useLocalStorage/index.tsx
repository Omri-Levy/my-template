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
      const controlledValue = typeof value === `undefined` ? null : value;

      localStorage.setItem(key, JSON.stringify(controlledValue));
    },
    [key]
  );
  const getLocalStorage: GetLocalStorage = useCallback(
    (defaultValue) => () => {
      try {
        const cachedItem = JSON.parse(localStorage.getItem(key) as string);

        if (!cachedItem) {
          setLocalStorage(defaultValue);

          return defaultValue;
        }

        return cachedItem;
      } catch (error) {
        console.error(error);

        return defaultValue;
      }
    },
    [key, setLocalStorage]
  );

  return {
    setLocalStorage,
    getLocalStorage,
  };
};

export default useLocalStorage;
