import { FunctionComponent } from 'react';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  FormControl,
} from '@chakra-ui/react';
import { Props } from './types';

/**
 * a single Chakra-UI's FormControl with Alert, AlertIcon and
 * AlertDescription in order to display response/server sided errors.
 */
const FormResponseError: FunctionComponent<Props> = ({ errors, ...props }) => (
  <FormControl mt={5} isInvalid={!!errors.responseError} isRequired {...props}>
    {errors?.responseError && (
      <Alert status={`error`}>
        <AlertIcon />
        <AlertDescription mr={2}>
          {errors?.responseError?.message}
        </AlertDescription>
      </Alert>
    )}
  </FormControl>
);

export default FormResponseError;
