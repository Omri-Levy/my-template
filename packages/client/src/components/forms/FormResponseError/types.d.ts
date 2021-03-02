import { FieldErrors } from 'react-hook-form';
import { FormControlProps } from '@chakra-ui/react';

interface Props extends FormControlProps {
  errors: FieldErrors;
}

export { Props };
