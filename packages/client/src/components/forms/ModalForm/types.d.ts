import { FieldErrors } from 'react-hook-form';
import { IconType } from 'react-icons';
import {
  Disclosure,
  FormSubmit,
  GetValues,
  HandleSubmit,
} from '../../../utils/types';

interface Props {
  icons?: boolean;
  headerIcon?: IconType;
  errors: FieldErrors;
  errorMessage: string;
  getValues: GetValues;
  handleSubmit: HandleSubmit;
  isSubmitting: boolean;
  toggleButtonText: string;
  headerText: string;
  submitButtonText: string;
  submitButtonIcon: IconType;
  onSubmit: FormSubmit;
  useRecaptcha: boolean;
  disclosure: Disclosure;
  alertDisclosure: Disclosure;
}

export { Props };
