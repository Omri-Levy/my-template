import { createStandaloneToast } from '@chakra-ui/react';

interface SignInFormFields {
  email: string;
  password: string;
}

interface State {
  toast: createStandaloneToast | undefined;
}

export { SignInFormFields, State };
