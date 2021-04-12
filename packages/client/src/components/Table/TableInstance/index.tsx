import { FunctionComponent, memo, useState } from 'react';
import {
  Flex,
  Table as ChakraTable,
  TableCaption,
  useBreakpointValue,
} from '@chakra-ui/react';
import { chunk } from 'lodash';
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
  const [currentColumns, setCurrentColumns] = useState(0);
  const headerGroupsCopy = [...props.headerGroups];
  const headers = headerGroupsCopy[0]?.headers?.map(
    (column) => (column?.Header as string) || ``
  );
  const headerChunks = chunk(headers, 2);
  const columns = [
    ...headerChunks.map((headerChunk) => ({
      label: `${headerChunk[0]} ${headerChunk[1] ? `&` : ``} ${
        headerChunk[1] || ``
      }`,
    })),
  ];
  const isMobile = useBreakpointValue({ base: true, sm: false });

  return (
    <Flex
      flexDirection={!isMobile ? `column` : undefined}
      alignItems={!isMobile ? `center` : undefined}
    >
      <Card
        backgroundColor={`unset`}
        color={`unset`}
        padding={{ base: `unset`, sm: 5 }}
      >
        <ChakraTable
          maxWidth={`100%`}
          {...props.getTableProps()}
          {...tableProps}
        >
          <TableCaption
            mb={5}
            fontWeight={`bold`}
            placement={`top`}
            maxWidth={`34ch`}
            mx={`auto`}
            fontSize={19}
          >
            {isMobile && (
              <ColumnsTabs
                setCurrentColumns={setCurrentColumns}
                data={columns}
              />
            )}
            {props.caption}
          </TableCaption>
          <TableHead
            headerGroups={props.headerGroups}
            currentColumns={currentColumns}
          />
          <TableBody
            getTableBodyProps={props.getTableBodyProps}
            page={props.page}
            prepareRow={props.prepareRow}
            checkCheckbox={props.checkCheckbox}
            isChecked={props.isChecked}
            currentColumns={currentColumns}
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
            colSpan={
              isMobile
                ? headerChunks[currentColumns].length === 1
                  ? headerChunks[currentColumns].length + 2
                  : headerChunks[currentColumns].length + 1
                : props.columns.length + 1
            }
            checkAllCheckboxes={props.checkAllCheckboxes}
            allCheckboxesChecked={props.allCheckboxesChecked}
            Actions={<Actions {...props.actionsProps} />}
            currentColumns={currentColumns}
            pageSize={props.pageSize}
          />
        </ChakraTable>
      </Card>
    </Flex>
  );
};

export default memo(TableInstance);
