import { FieldErrors } from 'react-hook-form';
import { FormControlProps } from '@chakra-ui/react';
import { ClearErrors, SetError } from '../../../utils/types';

interface Props extends FormControlProps {
  errors: FieldErrors;
}

type SetResponseError = (
  error: any,
  setError: SetError,
  expectedErrorMessages?: string[]
) => void;
type ClearResponseError = (clearErrors: ClearErrors) => () => ClearErrors;

export { Props, SetResponseError, ClearResponseError };
