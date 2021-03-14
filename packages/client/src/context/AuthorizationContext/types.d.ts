interface AuthorizationContextType {
  isAuthorized: boolean;
  authorize: () => Promise<void>;
}

export { AuthorizationContextType };
