import { BoxProps } from '@chakra-ui/react';

interface Props extends BoxProps {
  option: string;
  optionsProps?: OptionComponent;
}

export { Props };
