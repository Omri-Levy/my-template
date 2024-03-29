import { FunctionComponent, memo, useEffect, useState } from 'react';
import {
  Button,
  Flex,
  Icon,
  keyframes,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Color from 'color';
import Nav from './Nav';
import useDarkMode from '../../../../hooks/ui/useDarkMode';
import Logo from './Logo';
import DarkModeSwitch from './DarkModeSwitch';
import { Props } from './types';
import useLocalStorage from '../../../../hooks/caching/useLocalStorage';
import useIsTablet from '../../../../hooks/responsiveness/useIsTablet';

/**
 * a simple header component made using Chakra-UI's Flex component with the
 * html "header" tag passed to the "as" prop, wrapping the Nav, Logo and
 * DarkModeSwitch.
 */
const Header: FunctionComponent<Props> = ({ burgerFocusColor }) => {
  const { darkModeColor, darkModeColorInverted } = useDarkMode();
  const { getLocalStorage, setLocalStorage } = useLocalStorage(
    `burgerMenuIsOpen`
  );
  const cachedBurgerState = getLocalStorage(false)() as boolean;
  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(
    () => cachedBurgerState
  );
  const toggleBurgerMenu = () => setBurgerMenuIsOpen((prevState) => !prevState);
  const burgerDimensions = `50px`;
  const isTablet = useIsTablet();
  const opacity = isTablet ? (burgerMenuIsOpen ? 1 : 0) : 1;
  const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  `;
  const animationDirection = burgerMenuIsOpen ? `reverse` : `normal`;
  const animation = `${spin} 300ms ease-in ${animationDirection};`;
  const purple = useColorModeValue(`#6B46C1`, `#D6BCFA`);
  const defaultColor = burgerFocusColor
    ? Color(burgerFocusColor).rgb().alpha(0.6)
    : Color(purple).rgb().alpha(0.6);

  useEffect(() => {
    setLocalStorage(burgerMenuIsOpen);
  }, [burgerMenuIsOpen, setLocalStorage]);

  return (
    <>
      <Flex
        as={`header`}
        opacity={opacity}
        backgroundColor={{ base: darkModeColorInverted, md: darkModeColor }}
        color={{ base: darkModeColor, md: darkModeColorInverted }}
        p={5}
        mb={20}
        alignItems={`center`}
        position={{ base: `fixed`, md: `sticky` }}
        css={{
          position: `-webkit-sticky`,
        }}
        top={0}
        zIndex={{ base: burgerMenuIsOpen ? 1 : -1, md: `unset` }}
        left={{ base: 0, md: `unset` }}
        right={{ base: 0, md: `unset` }}
        height={{ base: `100vh`, md: `unset` }}
        flexDirection={{ base: `column`, md: `row` }}
        transition={`opacity 300ms ease-in`}
      >
        <Flex flexDirection={`column`}>
          <Logo text={`My Template`} />
          <DarkModeSwitch
            mt={5}
            mr={`auto`}
            position={{ base: `fixed`, md: `unset` }}
            left={{ base: 5, md: `unset` }}
            top={{ base: 0, md: `unset` }}
            display={isTablet && !burgerMenuIsOpen ? `none` : undefined}
          />
        </Flex>
        <Nav
          toggleBurgerMenu={toggleBurgerMenu}
          display={isTablet && !burgerMenuIsOpen ? `none` : `grid`}
        />
      </Flex>
      {isTablet && (
        <Button
          width={burgerDimensions}
          height={burgerDimensions}
          borderRadius={`100vw`}
          backgroundColor={darkModeColor}
          zIndex={2}
          position={`fixed`}
          right={`20px`}
          bottom={`10px`}
          onClick={toggleBurgerMenu}
          p={5}
          display={`grid`}
          placeContent={`center`}
          _focus={{ boxShadow: `none` }}
          _focusVisible={{
            boxShadow: `0 0 0 3px ${defaultColor} !important`,
            borderColor: `${defaultColor} !important`,
            animation,
          }}
          _hover={{
            animation,
          }}
        >
          <Icon
            width={`35px`}
            height={`30px`}
            as={burgerMenuIsOpen ? FaTimes : FaBars}
            color={darkModeColorInverted}
          />
        </Button>
      )}
    </>
  );
};
export default memo(Header);
