import { FunctionComponent } from 'react';
import {
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import {Props} from './types';

const FormResponseError: FunctionComponent<Props> = ({
  errors,
  ...props
                                      }) => {

  return (
    <FormControl
      isInvalid={!!errors.responseError}
      isRequired
      {...props}
    >
      <FormErrorMessage>
        {errors?.responseError?.message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default FormResponseError;
