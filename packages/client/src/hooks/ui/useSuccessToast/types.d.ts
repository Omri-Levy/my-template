import useToast from '../useToast';

type HookReturns = (
  description: string
) => {
  toast: useToast;
  toastOptions: {
    duration: null;
    isClosable: boolean;
    variant: string;
    description: string;
    position: string;
    title: string;
    status: string;
  };
};

export { HookReturns };
