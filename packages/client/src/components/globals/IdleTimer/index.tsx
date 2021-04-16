import {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  ButtonGroup,
  Icon,
  Text,
} from '@chakra-ui/react';
import { FaUserClock } from 'react-icons/all';
import { calculateMinutes, calculateSeconds } from '@my-template/shared';
import { useIdleTimer } from 'react-idle-timer';
import { FaSignOutAlt, FaTimes } from 'react-icons/fa';
import useSignOut from '../../../hooks/api/useSignOut';
import { Props } from './types';
import useColorModeShade from '../../../hooks/ui/useColorModeShade';
import useDarkMode from '../../../hooks/ui/useDarkMode';

const IdleTimer: FunctionComponent<Props> = ({ icons = true }) => {
  const [timer, setTimer] = useState(30);
  const [isLoading, setIsLoading] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();
  const idleMessageParagraphOne = `You've been inactive for 15 minutes..`;
  const idleMessageParagraphTwo =
    `Please cancel or sign out within ${timer}` +
    ` seconds or you will be signed out automatically.`;
  const { signOut, inactivitySignOut } = useSignOut();
  const [isOpen, setIsOpen] = useState(false);
  const onClose = useCallback(() => {
    setIsOpen(false);
    setTimer(30);
    clearInterval(intervalRef.current as NodeJS.Timeout);
  }, []);
  const onOpen = useCallback(() => setIsOpen(true), []);
  const handleSignOut = useCallback(async () => {
    try {
      setIsLoading(true);
      clearInterval(intervalRef.current as NodeJS.Timeout);

      await signOut();

      onClose();
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  }, [onClose, signOut]);
  const cancelRef = useRef();
  const handleOnIdle = useCallback(() => {
    onOpen();
    intervalRef.current = setInterval(() => {
      setTimer((prevState) => prevState - 1);
    }, 1000);
  }, [onOpen]);
  const { colorModeShadeInverted } = useColorModeShade(`red`);
  const { darkModeTextColorInverted, darkModeColor } = useDarkMode();
  const focusAndHover = !isLoading
    ? {
        backgroundColor: colorModeShadeInverted,
        borderColor: colorModeShadeInverted,
        boxShadow: `none`,
      }
    : undefined;
  const timeout = calculateMinutes(15) - calculateSeconds(30);

  useIdleTimer({
    timeout,
    onIdle: handleOnIdle,
    debounce: timeout,
    crossTab: true,
  });

  useEffect(() => {
    (async () => {
      if (timer === 0) {
        clearInterval(intervalRef.current as NodeJS.Timeout);
        await inactivitySignOut();
      }
    })();
  }, [handleSignOut, inactivitySignOut, timer]);

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef.current}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize={`lg`} fontWeight={`bold`}>
            {icons && <Icon as={FaUserClock} mb={0.5} mr={5} />}
            Idle Notice
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text>{idleMessageParagraphOne}</Text>
            <Text>{idleMessageParagraphTwo}</Text>
          </AlertDialogBody>
          <AlertDialogFooter>
            <ButtonGroup spacing={5}>
              <Button
                disabled={isLoading}
                ref={cancelRef.current}
                onClick={onClose}
                rightIcon={icons ? <Icon as={FaTimes} mb={0.5} /> : undefined}
                border={`2px solid`}
                borderColor={colorModeShadeInverted}
                _hover={focusAndHover}
                _focus={focusAndHover}
                mr={5}
                backgroundColor={darkModeColor}
                color={darkModeTextColorInverted}
              >
                Cancel
              </Button>
              <Button
                rightIcon={
                  icons ? <Icon as={FaSignOutAlt} mb={0.5} /> : undefined
                }
                onClick={handleSignOut}
                disabled={isLoading}
                isLoading={isLoading}
                border={`2px solid`}
                borderColor={colorModeShadeInverted}
                _hover={focusAndHover}
                _focus={focusAndHover}
                backgroundColor={darkModeColor}
                color={darkModeTextColorInverted}
              >
                Sign Out
              </Button>
            </ButtonGroup>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default IdleTimer;
