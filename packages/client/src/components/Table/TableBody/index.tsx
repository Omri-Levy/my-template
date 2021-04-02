import { FunctionComponent, memo } from 'react';
import { v4 } from 'uuid';
import { Checkbox, Tbody, Td, Tr } from '@chakra-ui/react';
import { Props } from './types';

const TableBody: FunctionComponent<Props> = ({
  getTableBodyProps,
  page,
  prepareRow,
  checkedItems,
  checkCheckbox,
}) => (
  <Tbody {...getTableBodyProps()}>
    {page?.map((row, index) => {
      prepareRow(row);

      return (
        <Tr {...row?.getRowProps()} key={v4()}>
          {row?.cells?.map((cell) => {
            return (
              <Td {...cell?.getCellProps()} key={v4()}>
                {cell?.render(`Cell`)}
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

export default memo(TableBody);
