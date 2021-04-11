import { FunctionComponent } from 'react';
import { Button, Icon, ListItem } from '@chakra-ui/react';
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
} from 'react-icons/fa';
import { Props } from './types';
import useColorModeShade from '../../../../../hooks/ui/useColorModeShade';
import useDarkMode from '../../../../../hooks/ui/useDarkMode';

const PaginationButton: FunctionComponent<Props> = ({
  icons = true,
  type,
  gotoPage,
  pageCount,
  canPreviousPage,
  canNextPage,
  previousPage,
  nextPage,
  buttonColor,
}) => {
  const color = buttonColor || `purple`;
  const { colorModeShadeInverted } = useColorModeShade(color);
  const { darkModeTextColorInverted } = useDarkMode();
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
  const focusAndHover = !disabled
    ? {
        backgroundColor: colorModeShadeInverted,
        color: darkModeTextColorInverted,
        borderColor: colorModeShadeInverted,
      }
    : undefined;

  return (
    <ListItem>
      <Button
        leftIcon={
          icons && leftIcon ? <Icon as={leftIcon} mb={0.5} /> : undefined
        }
        rightIcon={
          icons && rightIcon ? <Icon as={rightIcon} mb={0.5} /> : undefined
        }
        minWidth={{ base: `169.867px`, sm: `unset` }}
        onClick={onClick}
        disabled={disabled}
        border={`2px solid`}
        borderColor={colorModeShadeInverted}
        _hover={focusAndHover}
        _focusWithin={focusAndHover}
      >
        {text}
      </Button>
    </ListItem>
  );
};

export default PaginationButton;
