import { FunctionComponent } from 'react';
import { Box, Th, Thead, Tr } from '@chakra-ui/react';
import { v4 } from 'uuid';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Props } from './types';

const TableHead: FunctionComponent<Props> = ({ headerGroups }) => (
  <Thead>
    {headerGroups.map((headerGroup) => (
      <Tr {...headerGroup?.getHeaderGroupProps()} key={v4()}>
        {headerGroup?.headers?.map((column) => (
          <Th
            {...column?.getHeaderProps(column?.getSortByToggleProps())}
            key={v4()}
          >
            {column?.render(`Header`)}
            <Box as={`span`} pl={`4`}>
              {column?.isSorted ? (
                column?.isSortedDesc ? (
                  <FaChevronDown aria-label={`sorted descending`} />
                ) : (
                  <FaChevronUp aria-label={`sorted ascending`} />
                )
              ) : (
                <FaChevronDown aria-label={`sorted descending`} />
              )}
            </Box>
          </Th>
        ))}
      </Tr>
    ))}
  </Thead>
);

export default TableHead;
