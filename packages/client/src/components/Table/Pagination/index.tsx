import { FunctionComponent } from 'react';
import { Divider, Flex, Td, Tr, useBreakpointValue } from '@chakra-ui/react';
import { Props } from './types';
import Card from '../../Card';
import GoToPage from './GoToPage';
import PageNavigation from './PageNavigation';
import PageCounter from './PageCounter';
import RowsPerPage from './RowsPerPage';

const Pagination: FunctionComponent<Props> = ({
  pageCount,
  pageIndex,
  pageSize,
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
  const isMobile = useBreakpointValue({ base: true, sm: false });

  /**
   * TODO: refactor the component into smaller components.
   */
  return (
    <Tr>
      <Td colSpan={colSpan} px={{ base: 4, sm: undefined }}>
        <PageCounter pageCount={pageCount} pageIndex={pageIndex} />
        <Card
          display={`flex`}
          justifyContent={{ base: `unset`, sm: `center` }}
          alignItems={{ base: `center`, sm: `unset` }}
          color={`unset`}
          backgroundColor={`unset`}
          as={`nav`}
          flexDirection={{ base: `column`, sm: `row` }}
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
                <Divider
                  orientation={!isMobile ? `vertical` : `horizontal`}
                  mr={{ base: 0, sm: 10 }}
                  mt={{ base: 5, sm: 0 }}
                  mb={{ base: 5, sm: 0 }}
                />
              </Flex>
            </>
          )}
          <RowsPerPage
            setPageSize={setPageSize}
            displayPagination={displayPagination}
            rowsLength={rowsLength}
            pageSize={pageSize}
          />
          {displayPagination && (
            <>
              <Flex>
                <Divider
                  orientation={!isMobile ? `vertical` : `horizontal`}
                  mr={{ base: 0, sm: 10 }}
                  mt={{ base: 5, sm: 0 }}
                  mb={{ base: 5, sm: 0 }}
                />
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

export default Pagination;
