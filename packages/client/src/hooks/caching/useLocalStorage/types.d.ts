/**
 * sets a session storage item using the passed in key and value, using
 * JSON.stringify on the value.
 */
type SetLocalStorage = <T>(value: T) => void;
/**
 * gets a session storage item using the passed in key, using
 * JSON.parse on the returned value. Returns the passed in defaultValue if
 * the item does not exist in session storage.
 */
type GetLocalStorage = <T>(defaultValue: T) => <K>() => K | T;
type HookReturns = (
  key: string
) => {
  setLocalStorage: SetLocalStorage;
  getLocalStorage: GetLocalStorage;
};

export { HookReturns, SetLocalStorage, GetLocalStorage };
