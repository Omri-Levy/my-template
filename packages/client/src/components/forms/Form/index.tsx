import { Box, Button, Icon } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import Recaptcha from '../Recaptcha';
import useDisableSubmit from '../../../hooks/useDisableSubmit';
import { Props } from './types';
import useGRecaptchaResponse from '../../../hooks/useGRecaptchaResponse';
import FormResponseError from '../FormResponseError';

/**
 * TODO: update description
 */
const Form: FunctionComponent<Props> = ({
  errors,
  getValues,
  handleSubmit,
  onSubmit,
  isSubmitting,
  submitButtonText,
  icons = true,
  submitButtonIcon,
  children,
  ...props
}) => {
  const { gRecaptchaResponse, setGRecaptchaResponse } = useGRecaptchaResponse();
  const { disableSubmit } = useDisableSubmit(
    errors,
    getValues,
    gRecaptchaResponse
  );

  return (
    <Box
      noValidate
      as={`form`}
      onSubmit={handleSubmit(onSubmit(gRecaptchaResponse))}
      {...props}
    >
      {children}
      <FormResponseError errors={errors} mb={10} />
      <Recaptcha
        setGRecaptchaResponse={setGRecaptchaResponse}
        errors={errors}
      />
      <Button
        rightIcon={icons ? <Icon as={submitButtonIcon} mb={0.3} /> : undefined}
        type={`submit`}
        mt={4}
        isLoading={isSubmitting}
        disabled={disableSubmit}
        float={`right`}
      >
        {submitButtonText}
      </Button>
    </Box>
  );
};

export default Form;
