import { FunctionComponent, memo } from 'react';
import { v4 } from 'uuid';
import {
  Checkbox,
  Tbody,
  Td,
  Text,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react';
import { chunk } from 'lodash';
import { Props } from './types';

const TableBody: FunctionComponent<Props> = ({
  getTableBodyProps,
  page,
  prepareRow,
  checkedItems,
  checkCheckbox,
  currentColumns,
}) => {
  const isMobile = useBreakpointValue({ base: true, sm: false });

  return (
    <Tbody {...getTableBodyProps()}>
      {page?.map((row, index) => {
        prepareRow(row);
        const rowChunk = chunk(row?.cells, 2);
        const mobileRow = isMobile ? rowChunk[currentColumns] : row?.cells;

        return (
          <Tr {...row?.getRowProps()} key={v4()}>
            {mobileRow?.map((cell) => {
              return (
                <Td
                  {...cell?.getCellProps()}
                  colSpan={mobileRow.length === 1 ? 2 : undefined}
                  key={v4()}
                >
                  <Text isTruncated maxWidth={{ base: `10ch`, sm: `unset` }}>
                    {cell?.render(`Cell`)}
                  </Text>
                </Td>
              );
            })}
            <Td>
              <Checkbox
                isChecked={checkedItems[index] || checkedItems.every(Boolean)}
                onChange={checkCheckbox(row.values.col1, index)}
              />
            </Td>
          </Tr>
        );
      })}
    </Tbody>
  );
};

export default memo(TableBody);
