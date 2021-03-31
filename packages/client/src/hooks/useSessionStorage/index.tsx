/**
 * TODO: update description
 */
import { GetSessionStorage, HookReturns, SetSessionStorage } from './types';

/**
 * abstracted loading logic using react's useState for the isLoading
 * boolean, the startLoading function to set the state to true and the
 * stopLoading function to set the state to false.
 */
const useSessionStorage: HookReturns = (key) => {
  const setSessionStorage: SetSessionStorage = (value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  };
  const getSessionStorage: GetSessionStorage = (defaultValue) => () =>
    JSON.parse(sessionStorage.getItem(key) as string) || defaultValue;

  return {
    setSessionStorage,
    getSessionStorage,
  };
};

export default useSessionStorage;
