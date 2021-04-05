import { FunctionComponent } from 'react';
import {
  Button,
  Icon,
  Modal as ChakraModal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { Props } from './types';

const ModalFormContainer: FunctionComponent<Props> = ({
  icons = true,
  headerIcon,
  toggleButtonIcon,
  toggleButtonText,
  toggleButtonColor,
  headerText,
  disclosure,
  buttonProps,
  children,
}) => {
  const { onOpen, onClose, isOpen } = disclosure;

  return (
    <>
      <Button
        rightIcon={icons ? <Icon as={toggleButtonIcon} mb={0.5} /> : undefined}
        mr={5}
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
          <ModalBody>{children}</ModalBody>
          <ModalFooter justifyContent={`flex-start`} />
        </ModalContent>
      </ChakraModal>
    </>
  );
};

export default ModalFormContainer;
