import { HookReturns, ToastOptions } from './types';
import useToast from '../useToast';

const useInfoToast: HookReturns = (id, description) => {
  const toast = useToast();
  const toastOptions: ToastOptions = {
    id,
    status: `info`,
    title: `Info`,
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

export default useInfoToast;
