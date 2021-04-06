import { ChakraColorScheme } from '../../../../../utils/types';

type ButtonType = `firstPage` | `lastPage` | `previousPage` | `nextPage`;
interface Props {
  icons?: boolean;
  type: ButtonType;
  gotoPage: (number: number) => void;
  pageCount: number;
  canPreviousPage: boolean;
  canNextPage: boolean;
  previousPage: () => void;
  nextPage: () => void;
  buttonColor?: ChakraColorScheme;
}

export { ButtonType, Props };
