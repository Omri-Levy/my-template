type HookReturns = (regex: RegExp, action: <T, K>(args?: T) => K | any) => void;

export { HookReturns };
