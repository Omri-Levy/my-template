type SignOut = () => Promise<void>;
type HookReturns = () => {
  signOut: SignOut;
  inactivitySignOut: SignOut;
};

export { SignOut, HookReturns };
