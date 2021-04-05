import { FunctionComponent } from 'react';
import { Box, Button, Flex, Icon } from '@chakra-ui/react';
import { FaTimes } from 'react-icons/fa';
import Card from '../../../Card';
import FormResponseError from '../../FormResponseError';
import Recaptcha from '../../Recaptcha';
import { Props } from './types';
import useDisableSubmit from '../../../../hooks/forms/useDisableSubmit';
import useGRecaptchaResponse from '../../../../hooks/forms/useGRecaptchaResponse';

const ModalForm: FunctionComponent<Props> = ({
  icons = true,
  errors,
  getValues,
  handleSubmit,
  isSubmitting,
  submitButtonText,
  submitButtonIcon,
  submitButtonColor,
  onSubmit,
  useRecaptcha = true,
  onClose,
  disableSubmitCondition,
  submitButtonTitle,
  submitButtonDisabledTitle,
  children,
  ...props
}) => {
  const { gRecaptchaResponse, setGRecaptchaResponse } = useGRecaptchaResponse();
  const gRecaptchaResponseValue = useRecaptcha ? gRecaptchaResponse : `empty`;
  const disableSubmit = useDisableSubmit(
    errors,
    getValues,
    gRecaptchaResponseValue,
    disableSubmitCondition
  );
  let conditionalSubmitButtonTitle;

  if (disableSubmit && submitButtonDisabledTitle) {
    conditionalSubmitButtonTitle = submitButtonDisabledTitle;
  } else if (submitButtonTitle) {
    conditionalSubmitButtonTitle = submitButtonTitle;
  }

  return (
    <>
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
              rightIcon={icons ? <Icon as={FaTimes} /> : undefined}
              colorScheme={`red`}
            >
              Cancel
            </Button>
            <Button
              lineHeight={`1`}
              rightIcon={
                icons ? <Icon as={submitButtonIcon} mb={0.5} /> : undefined
              }
              type={`submit`}
              isLoading={isSubmitting}
              disabled={disableSubmit}
              title={conditionalSubmitButtonTitle}
              colorScheme={submitButtonColor || `orange`}
            >
              {submitButtonText}
            </Button>
          </Flex>
        </Box>
      </Card>
    </>
  );
};

export default ModalForm;
