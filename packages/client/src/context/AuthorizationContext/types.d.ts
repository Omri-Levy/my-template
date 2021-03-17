interface AuthorizationContextType {
  isAuthorized: boolean | undefined;
  authorize: () => Promise<void>;
}

export { AuthorizationContextType };
