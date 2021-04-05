import { FunctionComponent } from 'react';
import { Button, Icon, ListItem } from '@chakra-ui/react';
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
} from 'react-icons/fa';
import { Props } from './types';

const PaginationButton: FunctionComponent<Props> = ({
  icons = true,
  type,
  gotoPage,
  pageCount,
  canPreviousPage,
  canNextPage,
  previousPage,
  nextPage,
}) => {
  const firstPage = () => gotoPage(0);
  const lastPage = () => gotoPage(pageCount - 1);

  let leftIcon;
  let rightIcon;
  let onClick;
  let disabled;
  let text;

  switch (type) {
    case `firstPage`:
      leftIcon = FaAngleDoubleLeft;
      onClick = firstPage;
      disabled = !canPreviousPage;
      text = `First Page`;
      break;
    case `lastPage`:
      rightIcon = FaAngleDoubleRight;
      onClick = lastPage;
      disabled = !canNextPage;
      text = `Last Page`;
      break;
    case `previousPage`:
      leftIcon = FaAngleLeft;
      onClick = previousPage;
      disabled = !canPreviousPage;
      text = `Previous Page`;
      break;
    case `nextPage`:
      rightIcon = FaAngleRight;
      onClick = nextPage;
      disabled = !canNextPage;
      text = `Next Page`;
      break;
    default:
      rightIcon = FaAngleRight;
      onClick = nextPage;
      disabled = !canNextPage;
      text = `Next Page`;
      break;
  }

  return (
    <ListItem>
      <Button
        leftIcon={
          icons && leftIcon ? <Icon as={leftIcon} mb={0.5} /> : undefined
        }
        rightIcon={
          icons && rightIcon ? <Icon as={rightIcon} mb={0.5} /> : undefined
        }
        onClick={onClick}
        disabled={disabled}
        colorScheme={`orange`}
      >
        {text}
      </Button>
    </ListItem>
  );
};

export default PaginationButton;
