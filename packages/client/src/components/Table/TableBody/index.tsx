import { FunctionComponent, memo } from 'react';
import { Tbody, Td, Tr } from '@chakra-ui/react';
import { v4 } from 'uuid';
import { Props } from './types';

const TableBody: FunctionComponent<Props> = ({
                                               getTableBodyProps,
                                               page,
                                               prepareRow
                                             }) => {

  return (
    <Tbody {...getTableBodyProps()}>
      {page?.map((row) => {
        prepareRow(row);

        return (
          <Tr {...row?.getRowProps()} key={v4()}>
            {row?.cells?.map((cell) => (
              <Td {...cell?.getCellProps()} key={v4()}>
                {cell?.render(`Cell`)}
              </Td>
            ))}
          </Tr>
        );
      })}
    </Tbody>
  );
}

export default memo(TableBody);
