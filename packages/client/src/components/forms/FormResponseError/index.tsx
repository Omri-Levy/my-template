import { FunctionComponent, useEffect } from 'react';
import { FormControl, useDisclosure } from '@chakra-ui/react';
import { Props } from './types';
import Alert from '../../Alert';

/**
 * a single Chakra-UI's FormControl with Alert, AlertIcon and
 * AlertDescription in order to display response/server sided errors.
 */
const FormResponseError: FunctionComponent<Props> = ({ errors, ...props }) => {
  const disclosure = useDisclosure();
  const { isOpen, onOpen, onClose } = disclosure;

  useEffect(() => {
    if (errors?.responseError?.message && !isOpen) {
      onOpen();
    } else if (!errors?.responseError?.message && isOpen) {
      onClose();
    }
  }, [errors?.responseError?.message, isOpen, onClose, onOpen]);

  return (
    <FormControl
      mt={5}
      isInvalid={!!errors?.responseError?.message}
      isRequired
      {...props}
    >
      <Alert
        message={errors?.responseError?.message}
        status={`error`}
        disclosure={disclosure}
      />
    </FormControl>
  );
};

export default FormResponseError;
