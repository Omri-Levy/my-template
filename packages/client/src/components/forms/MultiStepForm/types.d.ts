import { FieldErrors } from 'react-hook-form';
import { BoxProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import {
  Children,
  FormSubmit,
  GetValues,
  HandleSubmit,
} from '../../../utils/types';
import { Breadcrumbs } from './Breadcrumbs/types';

interface Props extends BoxProps {
  breadcrumbs: Breadcrumbs;
  isFirstForm?: boolean;
  errors: FieldErrors;
  getValues: GetValues;
  nextFormPath?: string;
  handleSubmit: HandleSubmit;
  onSubmit?: FormSubmit;
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
