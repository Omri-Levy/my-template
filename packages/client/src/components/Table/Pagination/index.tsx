import { FunctionComponent, memo } from 'react';
import { Divider, Flex, Td, Tr } from '@chakra-ui/react';
import { Props } from './types';
import Card from '../../Card';
import GoToPage from './GoToPage';
import PageNavigation from './PageNavigation';
import PageCounter from './PageCounter';
import RowsPerPage from './RowsPerPage';

const Pagination: FunctionComponent<Props> = ({
                                                pageCount,
                                                pageIndex,
  rowsLength,
                                                gotoPage,
                                                canPreviousPage,
                                                canNextPage,
                                                previousPage,
                                                nextPage,
  setPageSize,
                                                colSpan,
                                                ...props
                                              }) => {
  const displayPagination = pageCount > 1;

  /**
   * TODO: refactor the component into smaller components.
   */
  return (
    <Tr>
      <Td colSpan={colSpan}>
      <PageCounter pageCount={pageCount} pageIndex={pageIndex} />
      <Card
        display={`flex`}
        justifyContent={`center`}
        color={`unset`}
        backgroundColor={`unset`}
        as={`nav`}
        {...props}
      >
        {displayPagination && (
          <>
            <PageNavigation
              gotoPage={gotoPage}
              pageCount={pageCount}
              canPreviousPage={canPreviousPage}
              canNextPage={canNextPage}
              previousPage={previousPage}
              nextPage={nextPage}
            />
            <Flex>
              <Divider orientation={`vertical`} mr={10} />
            </Flex>
          </>
        )}
        <RowsPerPage
          setPageSize={setPageSize}
          displayPagination={displayPagination}
          rowsLength={rowsLength}
        />
        {displayPagination && (
          <>
            <Flex>
              <Divider orientation={`vertical`} mr={10} />
            </Flex>
            <GoToPage
              pageCount={pageCount}
              pageIndex={pageIndex}
              gotoPage={gotoPage}
            />
          </>
        )}
      </Card>
      </Td>
    </Tr>
  );
};

export default memo(Pagination);

