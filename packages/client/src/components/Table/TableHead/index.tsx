import { FunctionComponent } from 'react';
import { Flex, Th, Thead, Tr } from '@chakra-ui/react';
import { v4 } from 'uuid';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Props } from './types';

const TableHead: FunctionComponent<Props> = ({ headerGroups }) => {
  const iconStyles = {
    marginLeft: 10,
  };

  return (
    <Thead>
      {headerGroups.map((headerGroup) => (
        <Tr {...headerGroup?.getHeaderGroupProps()} key={v4()}>
          {headerGroup?.headers?.map((column) => (
            <Th
              {...column?.getHeaderProps(column?.getSortByToggleProps())}
              key={v4()}
            >
              <Flex>
                {column?.render(`Header`)}
                {column?.isSorted ? (
                  column?.isSortedDesc ? (
                    <FaChevronDown style={iconStyles} aria-label={`sorted descending`} />
                  ) : (
                    <FaChevronUp style={iconStyles} aria-label={`sorted ascending`} />
                  )
                ) : (
                  <FaChevronDown style={iconStyles} aria-label={`sorted descending`} />
                )}
              </Flex>
            </Th>
          ))}
          <Th>
            Select
          </Th>
        </Tr>
      ))}
    </Thead>
  );
}

export default TableHead;

