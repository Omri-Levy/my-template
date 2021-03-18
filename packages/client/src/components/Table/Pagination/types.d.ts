import { BoxProps } from '@chakra-ui/react';

interface PaginationObject extends BoxProps {
  rowsLength: number;
  pageCount: number;
  pageIndex: number;
  gotoPage: (number: number) => void;
  canPreviousPage: boolean;
  canNextPage: boolean;
  previousPage: () => void;
  nextPage: () => void;
  pageSize: number;
  setPageSize: (number: number) => void;
  colSpan?: number;
}

type Props = PaginationObject;

export { Props, PaginationObject };
