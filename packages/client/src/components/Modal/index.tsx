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
import { FaTimes, FaTrashAlt } from 'react-icons/all';
import { Props } from './types';
import Alert from '../Alert';

const Modal: FunctionComponent<Props> = ({
  icons = true,
  headerIcon,
  toggleButtonText,
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
        leftIcon={icons ? <Icon as={FaTrashAlt} /> : undefined}
        onClick={onOpen}
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
                leftIcon={icons ? <Icon as={FaTimes} /> : undefined}
              >
                Cancel
              </Button>
              <Button
                leftIcon={
                  icons && actionIcon ? <Icon as={actionIcon} /> : undefined
                }
                onClick={onClick(onClose)}
                isLoading={isLoading}
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
