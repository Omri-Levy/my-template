import { BoxProps } from '@chakra-ui/react';

interface PaginationObject extends BoxProps {
  canPreviousPage: boolean;
  canNextPage: boolean;
  gotoPage: (number: number) => void;
  previousPage: () => void;
  nextPage: () => void;
  pageCount: number;
  pageSize: number;
  setPageSize: (pageSize: number) => void;
  pageIndex: number;
  rowsLength: number;
}

type Props = PaginationObject;

export { Props, PaginationObject };
