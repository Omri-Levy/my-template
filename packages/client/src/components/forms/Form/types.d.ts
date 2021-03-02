import { FieldErrors, useForm } from 'react-hook-form';
import { BoxProps } from '@chakra-ui/react';
import { JSXElementConstructor, ReactElement } from 'react';
import { Children } from '../../../utils/types';
import { OnSubmit } from '../../../hooks/useAuthentication/types';

interface Props extends BoxProps {
  errors: FieldErrors;
  getValues: useForm.getValues;
  icon?: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
  handleSubmit: useForm.handleSubmit;
  onSubmit: OnSubmit;
  isSubmitting: boolean;
  submitButtonText: string;
  children: Children;
}

export { Props };
