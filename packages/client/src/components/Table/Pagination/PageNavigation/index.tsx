import { FunctionComponent, memo, useMemo } from 'react';
import { HStack, List } from '@chakra-ui/react';
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
																										nextPage
}) => {
	const buttonTypes: ButtonType[] = useMemo(() => (
		[`firstPage`, `previousPage`, `nextPage`, `lastPage`]
	), []);

	return (
		<HStack as={List} pr={10}>
			{buttonTypes.map((buttonType) => (
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
		</HStack>
	);
};

export default memo(PageNavigation);
