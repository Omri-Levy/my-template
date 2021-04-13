import { ChangeEvent, FunctionComponent, useState } from 'react';
import {
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  Td,
  useDisclosure,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { useAsyncDebounce } from 'react-table';
import { Props } from './types';
import Modal from '../../Modal';
import useColorModeShade from '../../../hooks/ui/useColorModeShade';
import useIsMobile from '../../../hooks/responsiveness/useIsMobile';

/**
 * TODO: refactor to be more generic and reusable.
 */
const GlobalFilter: FunctionComponent<Props> = ({
  globalFilter,
  setGlobalFilter,
  colSpan,
  activeColor,
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
  const disclosure = useDisclosure();
  const alertDisclosure = useDisclosure();
  const isMobile = useIsMobile();
  const { colorModeShadeInverted } = useColorModeShade(activeColor || `purple`);
  const focusAndHover = {
    borderColor: colorModeShadeInverted,
  };

  if (isMobile) {
    return (
      <Td colSpan={colSpan}>
        <Modal
          modalProps={{
            mx: 5,
          }}
          toggleButtonText={`Filter`}
          headerIcon={FaSearch}
          actionIcon={FaSearch}
          disclosure={disclosure}
          alertDisclosure={alertDisclosure}
        >
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
                _focus={focusAndHover}
                _hover={focusAndHover}
              />
            </InputGroup>
          </FormControl>
        </Modal>
      </Td>
    );
  }

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
            _focus={focusAndHover}
            _hover={focusAndHover}
          />
        </InputGroup>
      </FormControl>
    </Td>
  );
};

export default GlobalFilter;
