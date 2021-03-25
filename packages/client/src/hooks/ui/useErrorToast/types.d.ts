import useToast from '../useToast';

type Variant = `subtle`;
type Position = `top`;
type Title = `Error`;
type Status = `error`;
interface ToastOptions {
  duration: null;
  isClosable: boolean;
  variant: Variant;
  description: string;
  position: Position;
  title: Title;
  status: Status;
}
type HookReturns = (
  description: string
) => {
  toast: useToast;
  toastOptions: ToastOptions;
};

export { HookReturns, ToastOptions };
