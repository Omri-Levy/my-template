import { HookReturns, ToastOptions } from './types';
import useToast from '../useToast';

const useErrorToast: HookReturns = (id, description) => {
  const toast = useToast();
  const toastOptions: ToastOptions = {
    id,
    status: `error`,
    title: `Error`,
    description,
    isClosable: true,
    duration: null,
    position: `top`,
    variant: `subtle`,
  };
  const activateToast = () => {
    if (!toast.isActive(id)) {
      toast(toastOptions);
    }
  };

  return { toast, toastOptions, activateToast };
};

export default useErrorToast;
