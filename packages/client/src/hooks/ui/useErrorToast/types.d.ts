import useToast from '../useToast';

type Variant = `subtle`;
type Position = `top`;
type Title = `Error`;
type Status = `error`;
interface ToastOptions {
  id: string;
  duration: null;
  isClosable: boolean;
  variant: Variant;
  description: string;
  position: Position;
  title: Title;
  status: Status;
}
type HookReturns = (
  id: string,
  description: string
) => {
  toast: useToast;
  toastOptions: ToastOptions;
  activateToast: () => unknown;
};

export { HookReturns, ToastOptions };
