import { FieldErrors, useForm } from 'react-hook-form';
import { FormType } from '../types';

type HelperText = string | undefined;
type GenerateHelperTextReturns = (isSignUp: boolean) => (helperText: string
) => HelperText;
interface Props {
  errors: FieldErrors;
  register: useForm.register;
  formType: FormType;
}
interface FormFields {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export {Props, FormFields, GenerateHelperTextReturns};
