interface Props {
  pageIndex: number;
  pageCount: number;
  gotoPage: (number: number) => void;
  activeColor?: string;
}

export { Props };
