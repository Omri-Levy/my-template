import { BoxProps } from '@chakra-ui/react';

interface PaginationObject extends BoxProps {
  rowsLength: number;
  pageCount: number;
  pageIndex: number;
  pageSize: number;
  gotoPage: (number: number) => void;
  canPreviousPage: boolean;
  canNextPage: boolean;
  previousPage: () => void;
  nextPage: () => void;
  setPageSize: (number: number) => void;
  colSpan?: number;
  activeColor?: string;
}

type Props = PaginationObject;

export { Props, PaginationObject };
