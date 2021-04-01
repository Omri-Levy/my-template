import { SelectProps as ChakraSelectProps } from '@chakra-ui/react';
import { GenericArray, Register } from '../../utils/types';
import { OptionComponent } from './Options/Option/types';

interface SelectProps extends ChakraSelectProps {
  register?: Register;
}
interface Props extends SelectProps {
  options: GenericArray | undefined;
  optionsProps?: OptionComponent;
}

export { Props };
