import { ChangeEvent, FunctionComponent, memo, useMemo } from 'react';
import { FormControl, FormLabel, useBreakpointValue } from '@chakra-ui/react';
import SelectGroup from '../../../SelectGroup';
import { Props } from './types';

const RowsPerPage: FunctionComponent<Props> = ({
  displayPagination,
  setPageSize,
  rowsLength,
}) => {
  const isMobile = useBreakpointValue({ base: true, sm: false });
  const selectOptions = useMemo(() => [1, 5, 10, `All`], []);
  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    let size;

    if (value === `All`) {
      size = rowsLength;
    } else {
      size = value;
    }

    setPageSize(Number(size));
  };

  const selectProps = {
    width: `145px`,
    name: `rowsPerPage`,
    placeholder: `--SELECT--`,
    onChange,
  };

  return (
    <FormControl
      display={`flex`}
      alignItems={`center`}
      id={`rowsPerPage`}
      pr={!isMobile && displayPagination ? 10 : 0}
    >
      <FormLabel mt={1} minWidth={`152px`}>
        Show rows per page:
        {` `}
      </FormLabel>
      <SelectGroup selectOptions={selectOptions} selectProps={selectProps} />
    </FormControl>
  );
};

export default memo(RowsPerPage);
