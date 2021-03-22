import { ChangeEvent, FunctionComponent, useState } from 'react';
import {
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  Td,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { useAsyncDebounce } from 'react-table';
import { Props } from './types';

/**
 * TODO: refactor to be more generic and reusable.
 */
const GlobalFilter: FunctionComponent<Props> = ({
  globalFilter,
  setGlobalFilter,
  colSpan,
}) => {
  const [filterValue, setFilterValue] = useState(globalFilter);
  const globalFilterFn = useAsyncDebounce((value) =>
    setGlobalFilter(value || undefined)
  );
  const filter = (value: string) => setFilterValue(value);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    filter(event.target.value);
    globalFilterFn(event.target.value);
  };

  return (
    <Td colSpan={colSpan}>
      <FormControl>
        <FormLabel>Filter:</FormLabel>
        <InputGroup>
          <InputLeftAddon pointerEvents={`none`}>
            <Icon as={FaSearch} />
          </InputLeftAddon>
          <Input
            value={filterValue || ``}
            placeholder={`Type here...`}
            variant={`filled`}
            onChange={onChange}
            name={`filter`}
            maxLength={320}
          />
        </InputGroup>
      </FormControl>
    </Td>
  );
};

export default GlobalFilter;
