import { ChangeEvent, FunctionComponent, useMemo } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Icon,
  Tooltip,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaQuestionCircle } from 'react-icons/fa';
import SelectGroup from '../../../SelectGroup';
import { Props } from './types';

const RowsPerPage: FunctionComponent<Props> = ({
  displayPagination,
  setPageSize,
  rowsLength,
  pageSize,
}) => {
  const isMobile = useBreakpointValue({ base: true, sm: false });
  const selectOptions = useMemo(() => [1, 5, 10, `All`], []);
  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    let size;

    if (value === `All`) {
      size = rowsLength;
    } else if (!selectOptions.includes(Number(value))) {
      return;
    } else {
      size = value;
    }

    setPageSize(Number(size));
  };
  const currentPageSize = pageSize === rowsLength ? `All` : pageSize;
  const selectProps = {
    width: `145px`,
    name: `rowsPerPage`,
    placeholder: `Currently: ${currentPageSize}`,
    onChange,
  };

  return (
    <FormControl
      display={`flex`}
      alignItems={`center`}
      id={`rowsPerPage`}
      pr={!isMobile && displayPagination ? 10 : 0}
    >
      <FormLabel mt={1} minWidth={`177px`}>
        Select rows per page:
        <Tooltip
          label={`Decides on how many table rows to display per table page.`}
        >
          <Box as={`span`}>
            <Icon as={FaQuestionCircle} fontSize={`sm`} mb={0.5} ml={2} />
          </Box>
        </Tooltip>
        {` `}
      </FormLabel>
      <SelectGroup selectOptions={selectOptions} selectProps={selectProps} />
    </FormControl>
  );
};

export default RowsPerPage;
