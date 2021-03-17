import { ChangeEvent, FunctionComponent } from 'react';
import {
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { Props } from './types';

/**
 * TODO: refactor to be more generic and reusable.
 */
const FilterInput: FunctionComponent<Props> = ({ setFilter, iconColor }) => {
  const filter = (event: ChangeEvent<HTMLInputElement>) => (
    setFilter(event.target.value || undefined)
  );

  return (
    <FormControl>
      <FormLabel>Filter: </FormLabel>
      <InputGroup>
        <InputLeftAddon pointerEvents={`none`}>
          <Icon as={FaSearch} color={iconColor} />
        </InputLeftAddon>
        <Input
          placeholder={`Type here...`}
          variant={`filled`}
          onChange={filter}
          name={`filter`}
          maxLength={320}
        />
      </InputGroup>
    </FormControl>
  );
};

export default FilterInput;
