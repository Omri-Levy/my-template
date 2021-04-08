type HookReturns = () => {
  /**
   * boolean state
   */
  isLoading: boolean;
  /**
   * sets isLoading state to true
   */
  startLoading: () => void;
  /**
   * sets isLoading state to false
   */
  stopLoading: () => void;
};

export { HookReturns };
