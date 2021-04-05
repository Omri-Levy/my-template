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
import { FaTimes, FaTrashAlt } from 'react-icons/fa';
import { Props } from './types';
import Alert from '../Alert';

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
  actionIcon,
  onClick,
  isLoading,
  actionText,
  disclosure,
  alertDisclosure,
  errorMessage,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isChecked, onOpen: onCheck, onClose: onUncheck } = disclosure;

  return (
    <>
      <Button
        rightIcon={icons ? <Icon as={FaTrashAlt} mb={0.5} /> : undefined}
        onClick={onOpen}
        colorScheme={toggleButtonColor || `orange`}
        {...buttonProps}
      >
        {toggleButtonText}
      </Button>
      <ChakraModal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {icons && <Icon as={headerIcon} mr={5} mb={0.5} />}
            {headerText}
          </ModalHeader>
          <ModalBody>
            <Heading as={`h2`} {...headingProps}>
              {bodyHeadingText}
            </Heading>
            <Text>{bodyText}</Text>
            {checkbox && (
              <Flex justifyContent={`flex-end`} mr={`65px`}>
                <Checkbox
                  isChecked={isChecked}
                  onChange={isChecked ? onUncheck : onCheck}
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
                colorScheme={`red`}
              >
                Cancel
              </Button>
              <Button
                rightIcon={
                  icons && actionIcon ? (
                    <Icon as={actionIcon} mb={0.5} />
                  ) : undefined
                }
                onClick={onClick(onClose)}
                isLoading={isLoading}
                colorScheme={toggleButtonColor || `orange`}
              >
                {actionText}
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </>
  );
};

export default Modal;
