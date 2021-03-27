import { IconType } from 'react-icons';
import { FieldErrors } from 'react-hook-form';
import {
  GetValues,
  HandleSubmit,
  ModalFormSubmit,
} from '../../../../utils/types';

interface Props {
  icons?: boolean;
  errors: FieldErrors;
  getValues: GetValues;
  handleSubmit: HandleSubmit;
  isSubmitting: boolean;
  submitButtonIcon: IconType;
  submitButtonText: string;
  onSubmit: ModalFormSubmit;
  useRecaptcha: boolean;
  onClose: () => void;
}

export { Props };
