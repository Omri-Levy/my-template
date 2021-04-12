import { FunctionComponent, useEffect, useState } from 'react';
import { Props } from './types';
import NumberField from '../../../NumberField';

const GoToPage: FunctionComponent<Props> = ({
  gotoPage,
  pageCount,
  pageIndex,
  activeColor,
}) => {
  const labelProps = {
    mt: 1,
    minWidth: `90px`,
  };
  const [value, setValue] = useState(pageIndex + 1);
  const onChange = (valueString: string) => {
    let page = valueString ? Number(valueString) - 1 : 0;

    /**
     * go to last page if decrementing page from the first page and go to first
     * page if incrementing page from last page
     */
    if (page === pageCount) {
      page = 0;
    } else if (page < 0) {
      page = pageCount - 1;
    }

    setValue(page + 1);
    gotoPage(page);
  };
  const inputProps = {
    name: `goToPage`,
    value,
    onChange,
    width: `100px`,
    min: 0,
    max: pageCount + 1,
    activeColor,
  };

  useEffect(() => {
    setValue(pageIndex + 1);
  }, [pageIndex]);

  return (
    <NumberField
      display={`flex`}
      alignItems={`center`}
      id={`goToPage`}
      labelTitle={`Go to page:`}
      labelProps={labelProps}
      inputProps={inputProps}
    />
  );
};

export default GoToPage;
