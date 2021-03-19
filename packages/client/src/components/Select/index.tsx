import { FunctionComponent } from 'react';
import { Select as ChakraSelect } from '@chakra-ui/react';
import { Props } from './types';
import Options from './Options';

/**
 * TODO: update description
 */
const Select: FunctionComponent<Props> = ({ options, register, ...props }) => (
  <ChakraSelect ref={register} {...props}>
    <Options options={options} />
  </ChakraSelect>
);

export default Select;
