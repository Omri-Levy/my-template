import { FunctionComponent } from 'react';
import { Select as ChakraSelect, useColorModeValue } from '@chakra-ui/react';
import Color from 'color';
import { Props } from './types';
import Options from './Options';

/**
 * TODO: update description
 */
const Select: FunctionComponent<Props> = ({
  options,
  register,
  optionsProps,
  activeColor,
  ...props
}) => {
  const purple = useColorModeValue(`#6B46C1`, `#D6BCFA`);
  const defaultColor = activeColor
    ? Color(activeColor).rgb().alpha(0.6)
    : Color(purple).rgb().alpha(0.6);
  const focusAndHover = {
    boxShadow: `0 0 0 1px ${defaultColor} !important`,
    borderColor: `${defaultColor.alpha(1)} !important`,
  };

  return (
    <ChakraSelect
      ref={register}
      _focus={focusAndHover}
      _hover={focusAndHover}
      {...props}
    >
      <Options options={options} optionsProps={optionsProps} />
    </ChakraSelect>
  );
};

export default Select;
