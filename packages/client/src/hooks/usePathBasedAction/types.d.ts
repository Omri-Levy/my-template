type HookReturns = (
  regex: RegExp,
  action: <T, K>(args?: T) => T | K | any
) => void;

export { HookReturns };
