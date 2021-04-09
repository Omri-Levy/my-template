import { FunctionComponent, memo } from 'react';
import {
  Box,
  Flex,
  Icon,
  keyframes,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Nav from './Nav';
import useDarkMode from '../../../../hooks/ui/useDarkMode';
import Logo from './Logo';
import DarkModeSwitch from './DarkModeSwitch';

/**
 * a simple header component made using Chakra-UI's Flex component with the
 * html "header" tag passed to the "as" prop, wrapping the Nav, Logo and
 * DarkModeSwitch.
 */
const Header: FunctionComponent = () => {
  const { darkModeColor, darkModeColorInverted } = useDarkMode();
  const {
    isOpen: burgerMenuIsOpen,
    onToggle: toggleBurgerMenu,
  } = useDisclosure();
  const burgerDimensions = `50px`;
  const isMobile = useBreakpointValue({ base: true, sm: false });
  const opacity = isMobile ? (burgerMenuIsOpen ? 1 : 0) : 1;
  const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  `;
  const animationDirection = burgerMenuIsOpen ? `reverse` : `normal`;
  const animation = `${spin} 300ms ease-in ${animationDirection};`;

  return (
    <>
      <Flex
        as={`header`}
        opacity={opacity}
        backgroundColor={{ base: darkModeColorInverted, sm: darkModeColor }}
        color={{ base: darkModeColor, sm: darkModeColorInverted }}
        p={5}
        mb={20}
        alignItems={`center`}
        position={{ base: `fixed`, sm: `sticky` }}
        css={{
          position: `-webkit-sticky`,
        }}
        top={0}
        zIndex={{ base: burgerMenuIsOpen ? 1 : -1, sm: `unset` }}
        left={{ base: 0, sm: `unset` }}
        right={{ base: 0, sm: `unset` }}
        height={{ base: `100vh`, sm: `unset` }}
        flexDirection={{ base: `column`, sm: `row` }}
        transition={`opacity 300ms ease-in`}
      >
        <Flex flexDirection={`column`}>
          <Logo text={`My Template`} />
          <DarkModeSwitch
            mt={5}
            mr={`auto`}
            position={{ base: `fixed`, sm: `unset` }}
            left={{ base: 5, sm: `unset` }}
            top={{ base: 0, sm: `unset` }}
          />
        </Flex>
        <Nav toggleBurgerMenu={toggleBurgerMenu} />
      </Flex>
      {isMobile && (
        <Box
          width={burgerDimensions}
          height={burgerDimensions}
          borderRadius={`100vw`}
          backgroundColor={darkModeColor}
          cursor={`pointer`}
          zIndex={2}
          position={`fixed`}
          right={burgerDimensions}
          bottom={burgerDimensions}
          onClick={toggleBurgerMenu}
          p={5}
          display={`grid`}
          placeContent={`center`}
        >
          <Icon
            width={`35px`}
            height={`30px`}
            as={burgerMenuIsOpen ? FaTimes : FaBars}
            color={darkModeColorInverted}
            animation={animation}
          />
        </Box>
      )}
    </>
  );
};
export default memo(Header);
