import { useForm } from 'react-hook-form';
import { FormControlProps } from '@chakra-ui/react';

interface Props extends FormControlProps {
  errors: useForm.errors;
}

export { Props };
