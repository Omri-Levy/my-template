import { FieldErrors, useForm } from 'react-hook-form';
import { FormControlProps } from '@chakra-ui/react';

interface Props extends FormControlProps {
  errors: FieldErrors;
}

type SetResponseError = (
  error: any,
  setError: useForm.setError,
  expectedErrorMessages?: string[]
) => void;

export { Props, SetResponseError };
