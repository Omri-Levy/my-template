import { FunctionComponent } from 'react';
import {
  Button,
  ButtonGroup,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Modal as ChakraModal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { FaTimes } from 'react-icons/fa';
import { Props } from './types';
import Alert from '../Alert';
import useColorModeShade from '../../hooks/ui/useColorModeShade';
import useDarkMode from '../../hooks/ui/useDarkMode';

const Modal: FunctionComponent<Props> = ({
  buttonProps,
  icons = true,
  headerIcon,
  toggleButtonText,
  toggleButtonColor,
  headerText,
  headingProps,
  bodyHeadingText,
  bodyText,
  checkbox,
  checkboxText,
  checkboxColor,
  actionIcon,
  onClick,
  isLoading,
  actionText,
  disclosure,
  alertDisclosure,
  errorMessage,
  modalProps,
  children,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isChecked, onOpen: onCheck, onClose: onUncheck } = disclosure;
  const { colorModeShadeInverted } = useColorModeShade(
    toggleButtonColor || `purple`
  );
  const { darkModeTextColorInverted } = useDarkMode();
  const focusAndHover = !buttonProps?.disabled
    ? {
        backgroundColor: colorModeShadeInverted,
        color: darkModeTextColorInverted,
        borderColor: colorModeShadeInverted,
      }
    : undefined;

  return (
    <>
      <Button
        rightIcon={
          icons && actionIcon ? <Icon as={actionIcon} mb={0.5} /> : undefined
        }
        onClick={onOpen}
        border={`2px solid`}
        borderColor={colorModeShadeInverted}
        _hover={focusAndHover}
        _focusWithin={focusAndHover}
        {...buttonProps}
      >
        {toggleButtonText}
      </Button>
      <ChakraModal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          boxShadow={`-1px 1px 0.5rem rgba(0, 0, 0, 0.3)`}
          {...modalProps}
        >
          {headerText && (
            <ModalHeader>
              {icons && headerIcon && <Icon as={headerIcon} mr={5} mb={0.5} />}
              {headerText}
            </ModalHeader>
          )}
          <ModalBody>
            {bodyHeadingText && (
              <Heading as={`h2`} fontSize={16} {...headingProps}>
                {bodyHeadingText}
              </Heading>
            )}
            {bodyText && <Text>{bodyText}</Text>}
            {children}
            {checkbox && (
              <Flex justifyContent={`flex-end`} mr={`65px`}>
                <Checkbox
                  isChecked={isChecked}
                  onChange={isChecked ? onUncheck : onCheck}
                  colorScheme={checkboxColor || `purple`}
                >
                  {checkboxText}
                </Checkbox>
              </Flex>
            )}
            <Alert
              status={`error`}
              mt={5}
              message={errorMessage || ``}
              disclosure={alertDisclosure}
              closeable
            />
          </ModalBody>
          <ModalFooter>
            <ButtonGroup spacing={5}>
              <Button
                onClick={onClose}
                rightIcon={icons ? <Icon as={FaTimes} mb={0.5} /> : undefined}
                border={`2px solid`}
                borderColor={colorModeShadeInverted}
                _hover={focusAndHover}
                _focusWithin={focusAndHover}
              >
                Cancel
              </Button>
              {onClick && (
                <Button
                  rightIcon={
                    icons && actionIcon ? (
                      <Icon as={actionIcon} mb={0.5} />
                    ) : undefined
                  }
                  onClick={onClick(onClose)}
                  isLoading={isLoading}
                  border={`2px solid`}
                  borderColor={colorModeShadeInverted}
                  _hover={focusAndHover}
                  _focusWithin={focusAndHover}
                >
                  {actionText}
                </Button>
              )}
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </>
  );
};

export default Modal;
