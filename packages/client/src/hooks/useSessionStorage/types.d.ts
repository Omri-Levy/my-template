/**
 * sets a session storage item using the passed in key and value, using
 * JSON.stringify on the value.
 */
type SetSessionStorage = <T>(value: T) => void;
/**
 * gets a session storage item using the passed in key, using
 * JSON.parse on the returned value. Returns the passed in defaultValue if
 * the item does not exist in session storage.
 */
type GetSessionStorage = <T>(defaultValue: T) => <K>() => K;
type HookReturns = (
  key: string
) => {
  setSessionStorage: SetSessionStorage;
  getSessionStorage: GetSessionStorage;
};

export { HookReturns, SetSessionStorage, GetSessionStorage };
