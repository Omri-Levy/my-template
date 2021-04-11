import { FunctionComponent, useMemo } from 'react';
import { ButtonGroup, List, Stack, useBreakpointValue } from '@chakra-ui/react';
import { v4 } from 'uuid';
import PaginationButton from './PaginationButton';
import { Props } from './types';
import { ButtonType } from './PaginationButton/types';

const PageNavigation: FunctionComponent<Props> = ({
  gotoPage,
  pageCount,
  canPreviousPage,
  canNextPage,
  previousPage,
  nextPage,
}) => {
  const buttonTypes: ButtonType[] = useMemo(
    () => [`firstPage`, `previousPage`, `nextPage`, `lastPage`],
    []
  );
  const isMobile = useBreakpointValue({ base: true, sm: false });

  if (isMobile) {
    return (
      <Stack direction={`column`} as={List} pr={0}>
        <ButtonGroup>
          <PaginationButton
            key={v4()}
            type={`previousPage`}
            gotoPage={gotoPage}
            pageCount={pageCount}
            canPreviousPage={canPreviousPage}
            canNextPage={canNextPage}
            previousPage={previousPage}
            nextPage={nextPage}
          />
          <PaginationButton
            key={v4()}
            type={`nextPage`}
            gotoPage={gotoPage}
            pageCount={pageCount}
            canPreviousPage={canPreviousPage}
            canNextPage={canNextPage}
            previousPage={previousPage}
            nextPage={nextPage}
          />
        </ButtonGroup>
        <ButtonGroup display={`flex`} justifyContent={`space-between`}>
          <PaginationButton
            key={v4()}
            type={`firstPage`}
            gotoPage={gotoPage}
            pageCount={pageCount}
            canPreviousPage={canPreviousPage}
            canNextPage={canNextPage}
            previousPage={previousPage}
            nextPage={nextPage}
          />
          <PaginationButton
            key={v4()}
            type={`lastPage`}
            gotoPage={gotoPage}
            pageCount={pageCount}
            canPreviousPage={canPreviousPage}
            canNextPage={canNextPage}
            previousPage={previousPage}
            nextPage={nextPage}
          />
        </ButtonGroup>
      </Stack>
    );
  }

  return (
    <Stack direction={`row`} as={List} pr={10}>
      {buttonTypes?.map((buttonType) => (
        <PaginationButton
          key={v4()}
          type={buttonType}
          gotoPage={gotoPage}
          pageCount={pageCount}
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      ))}
    </Stack>
  );
};

export default PageNavigation;
