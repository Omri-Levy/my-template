import { ChangeEvent, FunctionComponent } from 'react';
import {
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Icon,
  List,
  ListItem,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper
} from '@chakra-ui/react';
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight
} from 'react-icons/fa';
import { Props } from './types';
import Card from '../../Card';
import Select from '../../Select';

const Pagination: FunctionComponent<Props> = ({
                                                canPreviousPage,
                                                canNextPage,
                                                gotoPage,
                                                previousPage,
                                                nextPage,
                                                pageCount,
                                                pageSize,
                                                setPageSize,
                                                pageIndex,
                                                rowsLength,
                                                ...props
                                              }) => {
  const firstPage = () => gotoPage(0);
  const lastPage = () => gotoPage(pageCount - 1);
  const displayPagination = pageCount > 1;

  /**
   * TODO: refactor the component into smaller components.
   */
  return (
    <>
      <Flex>
        <Heading as={`h3`} fontSize={`0.9rem`} pb={3} ml={`auto`}>
          Page
          {` `}
          {pageIndex + 1}
          {` `}
          out of
          {` `}
          {pageCount}
        </Heading>
      </Flex>
      <Card
        display={`flex`}
        justifyContent={`center`}
        color={`unset`}
        backgroundColor={`unset`}
        as={`nav`}
        {...props}
      >
        {displayPagination && (
          <>
            <HStack as={List} pr={10}>
              <ListItem>
                <Button
                  leftIcon={<Icon as={FaAngleDoubleLeft} />}
                  onClick={firstPage}
                  disabled={!canPreviousPage}
                >
                  First Page
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  leftIcon={<Icon as={FaAngleLeft} />}
                  onClick={previousPage}
                  disabled={!canPreviousPage}
                >
                  Previous Page
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  rightIcon={<Icon as={FaAngleRight} />}
                  onClick={nextPage}
                  disabled={!canNextPage}
                >
                  Next Page
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  rightIcon={<Icon as={FaAngleDoubleRight} />}
                  onClick={lastPage}
                  disabled={!canNextPage}
                >
                  Last Page
                </Button>
              </ListItem>
            </HStack>
            <Flex>
              <Divider orientation={`vertical`} mr={10} />
            </Flex>
          </>
        )}
        <FormControl
          display={`flex`}
          alignItems={`center`}
          id={`rowsPerPage`}
          pr={displayPagination ? 10 : 0}
        >
          <FormLabel mt={1} minWidth={`152px`}>Show rows per page: </FormLabel>
          <Select
            width={`85px`}
            name={`rowsPerPage`}
            value={pageSize}
            onChange={(event: ChangeEvent<HTMLSelectElement>) => {
              const { value } = event.target;
              let size;

              if (value === `All`) {
                size = rowsLength;
              } else {
                size = value;
              }

              setPageSize(Number(size));
            }}
            options={[1, 5, 10, `All`]}
          />
        </FormControl>
        {displayPagination && (
          <>
            <Flex>
              <Divider orientation={`vertical`} mr={10} />
            </Flex>
            <FormControl
              display={`flex`}
              alignItems={`center`}
              id={`goToPage`}
            >
              <FormLabel mt={1} minWidth={`90px`}>Go to page: </FormLabel>
              <NumberInput
                name={`goToPage`}
                defaultValue={pageIndex + 1}
                onChange={(valueString) => {
                  const page = valueString ? Number(valueString) - 1 : 0;
                  gotoPage(page);
                }}
                minWidth={`100px`}
                min={1}
                max={pageCount}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </>
        )}
      </Card>
    </>
  );
};

export default Pagination;
