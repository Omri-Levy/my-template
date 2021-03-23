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

const Modal: FunctionComponent<Props> = ({
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
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isChecked, onOpen: onCheck, onClose: onUncheck } = disclosure;

  return (
    <>
      <Button leftIcon={<Icon as={FaTrashAlt} />} onClick={onOpen}>
        {toggleButtonText}
      </Button>
      <ChakraModal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{headerText}</ModalHeader>
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
          </ModalBody>
          <ModalFooter>
            <ButtonGroup spacing={5}>
              <Button onClick={onClose} leftIcon={<Icon as={FaTimes} />}>
                Cancel
              </Button>
              <Button
                leftIcon={actionIcon && <Icon as={actionIcon} />}
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
