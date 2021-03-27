import { FunctionComponent } from 'react';
import {
  Box,
  Button,
  Flex,
  Icon,
  Modal as ChakraModal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { FaUserEdit } from 'react-icons/fa';
import { FaTimes } from 'react-icons/all';
import Alert from '../../Alert';
import FormResponseError from '../FormResponseError';
import Recaptcha from '../Recaptcha';
import Card from '../../Card';
import useGRecaptchaResponse from '../../../hooks/forms/useGRecaptchaResponse';
import useDisableSubmit from '../../../hooks/forms/useDisableSubmit';
import { Props } from './types';

const ModalForm: FunctionComponent<Props> = ({
  icons = true,
  headerIcon,
  errors,
  errorMessage,
  getValues,
  handleSubmit,
  isSubmitting,
  toggleButtonText,
  headerText,
  submitButtonText,
  submitButtonIcon,
  onSubmit,
  useRecaptcha = true,
  disclosure,
  alertDisclosure,
  children,
  ...props
}) => {
  const { gRecaptchaResponse, setGRecaptchaResponse } = useGRecaptchaResponse();
  const { disableSubmit } = useDisableSubmit(
    errors,
    getValues,
    gRecaptchaResponse
  );
  const { onOpen, onClose, isOpen } = disclosure;

  return (
    <>
      <Button
        leftIcon={icons ? <Icon as={FaUserEdit} /> : undefined}
        mr={5}
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
            <Card color={`unset`} backgroundColor={`unset`}>
              <Box
                noValidate
                as={`form`}
                onSubmit={handleSubmit(onSubmit(gRecaptchaResponse))}
                {...props}
              >
                {children}
                <FormResponseError errors={errors} mb={10} />
                {useRecaptcha && (
                  <Recaptcha
                    setGRecaptchaResponse={setGRecaptchaResponse}
                    errors={errors}
                  />
                )}
                <Flex justifyContent={`space-between`}>
                  <Button
                    onClick={onClose}
                    leftIcon={icons ? <Icon as={FaTimes} /> : undefined}
                  >
                    Cancel
                  </Button>
                  <Button
                    rightIcon={
                      icons ? (
                        <Icon as={submitButtonIcon} mb={0.3} />
                      ) : undefined
                    }
                    type={`submit`}
                    isLoading={isSubmitting}
                    disabled={disableSubmit}
                  >
                    {submitButtonText}
                  </Button>
                </Flex>
              </Box>
            </Card>
            <Alert
              status={`error`}
              mt={5}
              message={errorMessage || ``}
              disclosure={alertDisclosure}
              closeable
            />
          </ModalBody>
          <ModalFooter justifyContent={`flex-start`} />
        </ModalContent>
      </ChakraModal>
    </>
  );
};

export default ModalForm;
