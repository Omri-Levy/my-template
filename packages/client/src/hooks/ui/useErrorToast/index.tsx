import { HookReturns, ToastOptions } from './types';
import useToast from '../useToast';

const useErrorToast: HookReturns = (description) => {
  const toast = useToast();
  const toastOptions: ToastOptions = {
    status: `error`,
    title: `Error`,
    description,
    isClosable: true,
    duration: null,
    position: `top`,
    variant: `subtle`,
  };

  return { toast, toastOptions };
};

export default useErrorToast;
