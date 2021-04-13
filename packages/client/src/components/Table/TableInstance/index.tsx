import { FunctionComponent, memo } from 'react';
import { Flex, Table as ChakraTable, TableCaption } from '@chakra-ui/react';
import TableHead from '../TableHead';
import TableBody from '../TableBody';
import TableFooter from '../TableFooter';
import { Props } from './types';
import Card from '../../Card';
import ColumnsTabs from '../ColumnsTabs';

const TableInstance: FunctionComponent<Props> = ({
  Actions,
  tableProps,
  ...props
}) => {
  return (
    <Flex flexDirection={{ md: `column` }} alignItems={{ md: `center` }}>
      <Card
        backgroundColor={`unset`}
        color={`unset`}
        padding={{ base: `unset`, md: 5 }}
        minWidth={{ sm: `100%`, md: `unset` }}
        mb={5}
      >
        <ChakraTable
          maxWidth={`100%`}
          {...props?.getTableProps()}
          {...tableProps}
        >
          <TableCaption
            mb={5}
            fontWeight={`bold`}
            placement={`top`}
            width={`100%`}
            fontSize={19}
          >
            {props?.isMobile && (
              <ColumnsTabs
                setCurrentColumns={props?.setCurrentColumns}
                data={props?.columnsChunks}
                currentColumns={props?.currentColumns}
              />
            )}
            {props?.caption}
          </TableCaption>
          <TableHead
            headerGroups={props?.headerGroups}
            currentColumns={props?.currentColumns}
          />
          <TableBody
            getTableBodyProps={props?.getTableBodyProps}
            page={props?.page}
            prepareRow={props?.prepareRow}
            checkCheckbox={props?.checkCheckbox}
            isChecked={props?.isChecked}
            currentColumns={props?.currentColumns}
          />
          <TableFooter
            footerGroups={props?.footerGroups}
            globalFilter={props?.globalFilter}
            setGlobalFilter={props?.setGlobalFilter}
            pageIndex={props?.pageIndex}
            pageCount={props?.pageCount}
            rowsLength={props?.rowsLength}
            canPreviousPage={props?.canPreviousPage}
            canNextPage={props?.canNextPage}
            gotoPage={props?.gotoPage}
            previousPage={props?.previousPage}
            nextPage={props?.nextPage}
            setPageSize={props?.setPageSize}
            colSpan={
              props?.isMobile
                ? props?.headerChunks[props?.currentColumns]?.length === 1
                  ? props?.headerChunks[props?.currentColumns]?.length + 2
                  : props?.headerChunks[props?.currentColumns]?.length + 1
                : props?.columns?.length + 1
            }
            checkAllCheckboxes={props?.checkAllCheckboxes}
            allCheckboxesChecked={props?.allCheckboxesChecked}
            Actions={<Actions {...props?.actionsProps} />}
            currentColumns={props?.currentColumns}
            pageSize={props?.pageSize}
          />
        </ChakraTable>
      </Card>
    </Flex>
  );
};

export default memo(TableInstance);
