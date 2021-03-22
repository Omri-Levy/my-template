import { FunctionComponent, memo } from 'react';
import { Props } from './types';
import NumberField from '../../../NumberField';

const GoToPage: FunctionComponent<Props> = ({
  gotoPage,
  pageCount,
  pageIndex,
}) => {
  const labelProps = {
    mt: 1,
    minWidth: `90px`,
  };
  const onChange = (valueString: string) => {
    const page = valueString ? Number(valueString) - 1 : 0;
    gotoPage(page);
  };
  const inputProps = {
    name: `goToPage`,
    defaultValue: pageIndex + 1,
    onChange,
    width: `100px`,
    min: 1,
    max: pageCount,
  };

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

export default memo(GoToPage);
