import { SelectProps } from '@chakra-ui/react';
import { Register } from '../../utils/types';

interface Props extends SelectProps {
  register: Register;
  options: string[] | undefined;
}

export { Props };
