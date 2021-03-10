import { useToast, UseToastOptions } from '@chakra-ui/react';

type HookReturns = () => useToast;
type GenerateToastOptions = (toastOptions: UseToastOptions) => toastOptions;

export { HookReturns, GenerateToastOptions };
