import { FunctionComponent } from 'react';
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput as ChakraNumberInput,
  NumberInputField,
  NumberInputStepper,
  useColorModeValue,
} from '@chakra-ui/react';
import Color from 'color';
import { Props } from './types';

const NumberInput: FunctionComponent<Props> = (props) => {
  const purple = useColorModeValue(`#6B46C1`, `#D6BCFA`);
  const defaultColor = props?.activeColor
    ? Color(props?.activeColor).rgb().alpha(0.6)
    : Color(purple).rgb().alpha(0.6);
  const focusAndHover = {
    'input:hover, input:focus': {
      boxShadow: `0 0 0 1px ${defaultColor} !important`,
      borderColor: `${defaultColor.alpha(1)} !important`,
    },
  };

  return (
    <ChakraNumberInput
      _focusWithin={focusAndHover}
      _hover={focusAndHover}
      {...props}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </ChakraNumberInput>
  );
};

export default NumberInput;
