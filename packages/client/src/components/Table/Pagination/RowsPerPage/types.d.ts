interface Props {
  displayPagination: boolean;
  setPageSize: (number: number) => void;
  rowsLength: number;
  pageSize: number;
  activeColor?: string;
}

export { Props };
