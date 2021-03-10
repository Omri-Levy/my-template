import { FieldErrors, useForm } from 'react-hook-form';
import { BoxProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { Children, GetValues } from '../../../utils/types';
import { Breadcrumbs } from './Breadcrumbs/types';
import { SignIn } from '../../../hooks/useSignIn/types';
import { SignUp } from '../../../hooks/useSignUp/types';

interface Props extends BoxProps {
  breadcrumbs: Breadcrumbs;
  isFirstForm?: boolean;
  errors: FieldErrors;
  getValues: GetValues;
  nextFormPath?: string;
  handleSubmit: typeof useForm.handleSubmit;
  onSubmit?: SignUp | SignIn;
  isSubmitting: boolean;
  submitButtonText?: string;
  icons?: boolean;
  submitButtonIcon?: IconType;
  children: Children;
}

type PreviousForm = () => void;
type NextForm = () => void;
type NextFormPath = string | undefined;

type HookReturns = (
  getValues: GetValues,
  nextFormPath: NextFormPath
) => {
  previousForm: PreviousForm;
  nextForm: NextForm;
};

export { Props, PreviousForm, NextForm, HookReturns };
