import { FieldErrors, useForm } from 'react-hook-form';
import { BoxProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { Children, GetValues } from '../../../utils/types';
import { SignIn } from '../../../hooks/useSignIn/types';
import { SignUp } from '../../../hooks/useSignUp/types';

interface Props extends BoxProps {
  errors: FieldErrors;
  getValues: GetValues;
  handleSubmit: typeof useForm.handleSubmit;
  onSubmit: SignUp | SignIn;
  isSubmitting: boolean;
  submitButtonText: string;
  icons?: boolean;
  submitButtonIcon?: IconType;
  children: Children;
}

export { Props };
