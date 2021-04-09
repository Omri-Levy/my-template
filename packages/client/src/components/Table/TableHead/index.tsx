import { FunctionComponent } from 'react';
import {
  Flex,
  Icon,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaChevronDown, FaChevronUp } from 'react-icons/all';
import { v4 } from 'uuid';
import { chunk } from 'lodash';
import { Props } from './types';

const TableHead: FunctionComponent<Props> = ({
  headerGroups,
  currentColumns,
}) => {
  const marginLeft = 10;
  const isMobile = useBreakpointValue({ base: true, sm: false });

  return (
    <>
      <Thead>
        {headerGroups?.map((headerGroup) => {
          const headersChunk = chunk(headerGroup?.headers, 2);
          const mobileHeaders = isMobile
            ? headersChunk[currentColumns]
            : headerGroup?.headers;

          return (
            <Tr {...headerGroup?.getHeaderGroupProps()} key={v4()}>
              {mobileHeaders?.map((column) => (
                <Th
                  {...column?.getHeaderProps(column?.getSortByToggleProps())}
                  colSpan={mobileHeaders.length === 1 ? 2 : undefined}
                  key={v4()}
                >
                  <Flex>
                    <Text>{column?.render(`Header`)}</Text>
                    {column?.isSorted ? (
                      column?.isSortedDesc ? (
                        <Icon
                          as={FaChevronDown}
                          marginLeft={marginLeft}
                          aria-label={`sorted descending`}
                        />
                      ) : (
                        <Icon
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
