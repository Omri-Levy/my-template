import { FunctionComponent, memo } from 'react';
import { v4 } from 'uuid';
import { Checkbox, Tbody, Td, Text, Tr } from '@chakra-ui/react';
import { chunk } from 'lodash';
import { Props } from './types';
import useColumnsAmount from '../../../hooks/responsiveness/useColumnsAmount';

const TableBody: FunctionComponent<Props> = ({
  getTableBodyProps,
  page,
  prepareRow,
  isChecked,
  checkCheckbox,
  currentColumns,
  checkboxColor,
}) => {
  const checkboxHoverAndFocus = {
    '.chakra-checkbox__control': {
      transform: `scale(1.2)`,
      transition: `scale 240ms ease-in-out`,
      boxShadow: `none`,
    },
  };
  const columnsAmount = useColumnsAmount();

  return (
    <Tbody {...getTableBodyProps()}>
      {page?.map((row) => {
        prepareRow(row);
        const rowChunk = chunk(row?.cells, columnsAmount);
        const rows = rowChunk[currentColumns];

        return (
          <Tr {...row?.getRowProps()} key={v4()}>
            {rows?.map((cell) => {
              return (
                <Td
                  {...cell?.getCellProps()}
                  colSpan={rows?.length === 1 ? 2 : undefined}
                  key={v4()}
                >
                  <Text isTruncated maxWidth={{ base: `10ch`, md: `unset` }}>
                    {cell?.render(`Cell`)}
                  </Text>
                </Td>
              );
            })}
            <Td>
              <Checkbox
                isChecked={isChecked(row.values.col1)}
                onChange={checkCheckbox(row.values.col1)}
                colorScheme={checkboxColor || `purple`}
                _hover={checkboxHoverAndFocus}
                _focusWithin={checkboxHoverAndFocus}
              />
            </Td>
          </Tr>
        );
      })}
    </Tbody>
  );
};

export default memo(TableBody);
