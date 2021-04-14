import { FunctionComponent } from 'react';
import { Divider, Flex, Td, Tr, useMediaQuery } from '@chakra-ui/react';
import { Props } from './types';
import Card from '../../Card';
import GoToPage from './GoToPage';
import PageNavigation from './PageNavigation';
import PageCounter from './PageCounter';
import RowsPerPage from './RowsPerPage';
import useIsMobile from '../../../hooks/responsiveness/useIsMobile';

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
  const isMobile = useIsMobile();
  const [notEnoughSpace] = useMediaQuery(`(max-width: 90em)`);

  return (
    <Tr>
      <Td colSpan={colSpan} px={{ base: 4, xl: undefined }}>
        <PageCounter pageCount={pageCount} pageIndex={pageIndex} />
        <Card
          display={`flex`}
          justifyContent={{
            base: `unset`,
            xl: `center`,
          }}
          alignItems={{
            base: `center`,
            xl: `unset`,
          }}
          color={`unset`}
          backgroundColor={`unset`}
          as={`nav`}
          flexDirection={{
            base: `column`,
            xl: notEnoughSpace ? `column` : `row`,
          }}
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
                  orientation={
                    !isMobile || notEnoughSpace ? `vertical` : `horizontal`
                  }
                  mr={{ base: 0, xl: notEnoughSpace ? 0 : 10 }}
                  mt={{ base: 5, xl: notEnoughSpace ? 5 : 0 }}
                  mb={{ base: 5, xl: notEnoughSpace ? 5 : 0 }}
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
                  orientation={
                    !isMobile || notEnoughSpace ? `vertical` : `horizontal`
                  }
                  mr={{ base: 0, xl: notEnoughSpace ? 0 : 10 }}
                  mt={{ base: 5, xl: notEnoughSpace ? 5 : 0 }}
                  mb={{ base: 5, xl: notEnoughSpace ? 5 : 0 }}
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
