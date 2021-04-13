import { FunctionComponent } from 'react';
import { Divider, Flex, Td, Tr } from '@chakra-ui/react';
import { Props } from './types';
import Card from '../../Card';
import GoToPage from './GoToPage';
import PageNavigation from './PageNavigation';
import PageCounter from './PageCounter';
import RowsPerPage from './RowsPerPage';
import useIsTablet from '../../../hooks/responsiveness/useIsTablet';

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
  activeColor,
  ...props
}) => {
  const displayPagination = pageCount > 1;
  const isTablet = useIsTablet();

  return (
    <Tr>
      <Td colSpan={colSpan} px={{ base: 4, md: undefined }}>
        <PageCounter pageCount={pageCount} pageIndex={pageIndex} />
        <Card
          display={`flex`}
          justifyContent={{ base: `unset`, md: `center` }}
          alignItems={{ base: `center`, md: `unset` }}
          color={`unset`}
          backgroundColor={`unset`}
          as={`nav`}
          flexDirection={{ base: `column`, md: `row` }}
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
                  orientation={!isTablet ? `vertical` : `horizontal`}
                  mr={{ base: 0, md: 10 }}
                  mt={{ base: 5, md: 0 }}
                  mb={{ base: 5, md: 0 }}
                />
              </Flex>
            </>
          )}
          <RowsPerPage
            setPageSize={setPageSize}
            displayPagination={displayPagination}
            rowsLength={rowsLength}
            pageSize={pageSize}
            activeColor={activeColor}
          />
          {displayPagination && (
            <>
              <Flex>
                <Divider
                  orientation={!isTablet ? `vertical` : `horizontal`}
                  mr={{ base: 0, md: 10 }}
                  mt={{ base: 5, md: 0 }}
                  mb={{ base: 5, md: 0 }}
                />
              </Flex>
              <GoToPage
                pageCount={pageCount}
                pageIndex={pageIndex}
                gotoPage={gotoPage}
                activeColor={activeColor}
              />
            </>
          )}
        </Card>
      </Td>
    </Tr>
  );
};

export default Pagination;
