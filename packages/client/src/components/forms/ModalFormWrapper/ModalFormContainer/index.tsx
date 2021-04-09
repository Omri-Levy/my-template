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
import useColorModeShade from '../../../../hooks/ui/useColorModeShade';

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
  const { colorModeShadeInverted } = useColorModeShade(
    toggleButtonColor || `purple`
  );

  return (
    <>
      <Button
        rightIcon={icons ? <Icon as={toggleButtonIcon} mb={0.5} /> : undefined}
        mr={5}
        onClick={onOpen}
        border={`2px solid`}
        borderColor={colorModeShadeInverted}
        {...buttonProps}
      >
        {toggleButtonText}
      </Button>
      <ChakraModal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent boxShadow={`-1px 1px 0.5rem rgba(0, 0, 0, 0.3)`}>
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
