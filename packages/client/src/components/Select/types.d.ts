import { SelectProps as ChakraSelectProps } from '@chakra-ui/select/dist/types/select';
import { GenericArray, Register } from '../../utils/types';

interface SelectProps extends ChakraSelectProps {
  register?: Register;
};
interface Props extends SelectProps {
  options: GenericArray | undefined;
}

export { Props };
