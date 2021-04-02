import { FieldErrors } from 'react-hook-form';
import { FormControlProps } from '@chakra-ui/react';
import { ClearErrors, Register } from '../../../utils/types';

type FormType =
  | `personalInformation`
  | `securityInformation`
  | `signIn`
  | `forgotPassword`
  | `resetPassword`
  | `updateProfile`
  | `updateUserProfile`
  | `updatePassword`
  | `updateUserPassword`;

interface Props extends FormControlProps {
  errors: FieldErrors;
  clearErrors: ClearErrors;
  register: Register;
  isAdminAction?: boolean;
}

interface PropsPlusFormType {
  errors: FieldErrors;
  clearErrors: ClearErrors;
  register: Register;
  formType: FormType;
}

export { FormType, Props, PropsPlusFormType };
