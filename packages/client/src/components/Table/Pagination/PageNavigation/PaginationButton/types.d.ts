type ButtonType = `firstPage` | `lastPage` | `previousPage` | `nextPage`;
interface Props {
  type: ButtonType;
  gotoPage: (number: number) => void;
  pageCount: number;
  canPreviousPage: boolean;
  canNextPage: boolean;
  previousPage: () => void;
  nextPage: () => void;
}

export { ButtonType, Props };
