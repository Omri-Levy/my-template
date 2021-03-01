import { BoxProps } from '@chakra-ui/react';

type FormType = `signUp` | `signIn`;

interface Props extends BoxProps {
  formType: FormType;
}

export { Props, FormType };
