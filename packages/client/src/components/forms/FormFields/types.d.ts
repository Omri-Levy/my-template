import { FieldErrors } from 'react-hook-form';
import { ClearErrors, Register } from '../../../utils/types';

type FormType =
  | `personalInformation`
  | `securityInformation`
  | `signIn`
  | `forgotPassword`
  | `resetPassword`;

interface Props {
  errors: FieldErrors;
  clearErrors: ClearErrors;
  register: Register;
}

interface PropsPlusFormType {
  errors: FieldErrors;
  clearErrors: ClearErrors;
  register: Register;
  formType: FormType;
}

export { FormType, Props, PropsPlusFormType };
