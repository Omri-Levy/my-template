import { IconType } from 'react-icons';
import { FieldErrors } from 'react-hook-form';
import {
  ChakraColorScheme,
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
  submitButtonColor?: ChakraColorScheme;
  onSubmit: ModalFormSubmit;
  useRecaptcha: boolean;
  onClose: () => void;
  disableSubmitCondition?: () => boolean;
  submitButtonTitle?: string;
  submitButtonDisabledTitle?: string;
}

export { Props };
