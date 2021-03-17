import { SelectProps } from '@chakra-ui/react';
import { GenericArray, Register } from '../../utils/types';

interface Props extends SelectProps {
  register?: Register;
  options: GenericArray | undefined;
}

export { Props };
