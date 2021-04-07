import { FunctionComponent } from 'react';
import { Flex, Table as ChakraTable, TableCaption } from '@chakra-ui/react';
import Card from '../../Card';
import TableHead from '../TableHead';
import TableBody from '../TableBody';
import TableFooter from '../TableFooter';
import { Props } from './types';

const TableInstance: FunctionComponent<Props> = ({
  Actions,
  tableProps,
  ...props
}) => (
  <Flex flexDirection={`column`} alignItems={`center`}>
    <Card color={`unset`} backgroundColor={`unset`}>
      <ChakraTable {...props.getTableProps()} {...tableProps}>
        <TableCaption>{props.caption}</TableCaption>
        <TableHead headerGroups={props.headerGroups} />
        <TableBody
          getTableBodyProps={props.getTableBodyProps}
          page={props.page}
          prepareRow={props.prepareRow}
          checkCheckbox={props.checkCheckboxInstance}
          checkedItems={props.checkedItems}
        />
        <TableFooter
          footerGroups={props.footerGroups}
          globalFilter={props.globalFilter}
          setGlobalFilter={props.setGlobalFilter}
          pageIndex={props.pageIndex}
          pageCount={props.pageCount}
          rowsLength={props.rowsLength}
          canPreviousPage={props.canPreviousPage}
          canNextPage={props.canNextPage}
          gotoPage={props.gotoPage}
          previousPage={props.previousPage}
          nextPage={props.nextPage}
          setPageSize={props.setPageSize}
          colSpan={props.columns.length + 1}
          checkAllCheckboxes={props.checkAllCheckboxesInstance}
          checkedItems={props.checkedItems}
          Actions={
            <Actions
              {...props.actionsProps}
              checkedItems={props.checkedItems}
            />
          }
        />
      </ChakraTable>
    </Card>
  </Flex>
);

export default TableInstance;
