import { FieldErrors, useForm } from 'react-hook-form';
import { FormType } from '../types';
import { FormEvent } from 'react';

type ClearErrors = useForm.clearErrors;
type ClearResponseError = (clearErrors: ClearErrors) =>
  (event: FormEvent<HTMLInputElement>) => ClearErrors;
type Register = useForm.register;
interface Props {
  errors: FieldErrors;
  clearErrors: ClearErrors;
  register: Register;
  formType: FormType;
}
type HelperText = string | undefined;
type GenerateHelperTextReturns = (isSignUp: boolean) => (helperText: string
) => HelperText;
interface FormFields {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export {ClearErrors, ClearResponseError, Register, Props, HelperText,
  GenerateHelperTextReturns,
  FormFields};
