import { FunctionComponent } from 'react';
import { Flex, Icon, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { FaChevronDown, FaChevronUp } from 'react-icons/all';
import { v4 } from 'uuid';
import { chunk } from 'lodash';
import { Props } from './types';
import useColorModeShade from '../../../hooks/ui/useColorModeShade';
import useColumnsAmount from '../../../hooks/responsiveness/useColumnsAmount';

const TableHead: FunctionComponent<Props> = ({
  headerGroups,
  currentColumns,
  sortedByColor,
}) => {
  const marginLeft = 10;
  const { colorModeShadeInverted } = useColorModeShade(
    sortedByColor || `purple`
  );
  const columnsAmount = useColumnsAmount();

  return (
    <>
      <Thead>
        {headerGroups?.map((headerGroup) => {
          const headersChunk = chunk(headerGroup?.headers, columnsAmount);
          const columns = headersChunk[currentColumns];

          return (
            <Tr {...headerGroup?.getHeaderGroupProps()} key={v4()}>
              {columns?.map((column) => (
                <Th
                  {...column?.getHeaderProps(column?.getSortByToggleProps())}
                  colSpan={columns?.length === 1 ? 2 : undefined}
                  fontSize={14}
                  color={column?.isSorted ? colorModeShadeInverted : undefined}
                  _hover={{
                    color: colorModeShadeInverted,
                  }}
                  key={v4()}
                >
                  <Flex>
                    <Text>{column?.render(`Header`)}</Text>
                    {column?.isSorted ? (
                      column?.isSortedDesc ? (
                        <Icon
                          color={colorModeShadeInverted}
                          as={FaChevronDown}
                          marginLeft={marginLeft}
                          aria-label={`sorted descending`}
                        />
                      ) : (
                        <Icon
                          color={colorModeShadeInverted}
                          as={FaChevronUp}
                          marginLeft={marginLeft}
                          aria-label={`sorted ascending`}
                        />
                      )
                    ) : (
                      <Icon
                        as={FaChevronDown}
                        marginLeft={marginLeft}
                        aria-label={`sorted descending`}
                      />
                    )}
                  </Flex>
                </Th>
              ))}
              <Th>Select</Th>
            </Tr>
          );
        })}
      </Thead>
    </>
  );
};

export default TableHead;
