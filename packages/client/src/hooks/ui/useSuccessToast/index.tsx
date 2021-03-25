import { HookReturns, ToastOptions } from './types';
import useToast from '../useToast';

const useSuccessToast: HookReturns = (description) => {
  const toast = useToast();
  const toastOptions: ToastOptions = {
    status: `success`,
    title: `Success`,
    description,
    isClosable: true,
    duration: null,
    position: `top`,
    variant: `subtle`,
  };

  return { toast, toastOptions };
};

export default useSuccessToast;
