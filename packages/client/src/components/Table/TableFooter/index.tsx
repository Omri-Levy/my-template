import { FunctionComponent, memo } from 'react';
import { Tfoot, Th, Tr } from '@chakra-ui/react';
import { v4 } from 'uuid';
import { Props } from './types';
import GlobalFilter from '../GlobalFilter';
import Pagination from '../Pagination';

const TableFooter: FunctionComponent<Props> = ({
  footerGroups,
  globalFilter,
  setGlobalFilter,
  rowsLength,
  pageIndex,
  pageCount,
                                                 gotoPage,
                                                 canPreviousPage,
                                                 canNextPage,
                                                 previousPage,
                                                 nextPage,
  pageSize,
  setPageSize,
                                               }) =>  {

  return (
    <Tfoot>
      {footerGroups?.map((group) => (
        <Tr {...group?.getFooterGroupProps()} key={v4()}>
          {group?.headers?.map((column) => (
            <Th {...column?.getFooterProps()} key={v4()}>
              {column?.render(`Footer`)}
            </Th>
          ))}
        </Tr>
      ))}
          <GlobalFilter
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
          <Pagination
            colSpan={5}
            pageIndex={pageIndex}
            pageCount={pageCount}
            rowsLength={rowsLength}
            gotoPage={gotoPage}
            canPreviousPage={canPreviousPage}
            canNextPage={canNextPage}
            previousPage={previousPage}
            nextPage={nextPage}
            pageSize={pageSize}
            setPageSize={setPageSize}
          />
    </Tfoot>
  );
}

export default memo(TableFooter);

