import { FunctionComponent } from 'react';
import { FormControl, FormErrorMessage } from '@chakra-ui/react';
import { Props } from './types';

/**
 * a single Chakra-UI's FormControl with FormErrorMessage in order to
 * display response/server sided errors.
 */
const FormResponseError: FunctionComponent<Props> = ({ errors, ...props }) => (
  <FormControl isInvalid={!!errors.responseError} isRequired {...props}>
    <FormErrorMessage>{errors?.responseError?.message}</FormErrorMessage>
  </FormControl>
);

export default FormResponseError;
