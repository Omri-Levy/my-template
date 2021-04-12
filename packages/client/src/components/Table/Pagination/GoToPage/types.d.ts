import { ChakraColorScheme } from '../../../../utils/types';

interface Props {
  pageIndex: number;
  pageCount: number;
  gotoPage: (number: number) => void;
  activeColor?: ChakraColorScheme;
}

export { Props };
