import { ChakraColorScheme } from '../../../utils/types';

interface Props {
  globalFilter: string;
  setGlobalFilter: (value: string) => void;
  colSpan?: number;
  activeColor?: ChakraColorScheme;
}

export { Props };
