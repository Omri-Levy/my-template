import { Box, Button } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import Recaptcha from '../Recaptcha';
import useDisableSubmit from '../../../hooks/useDisableSubmit';
import { Props } from './types';
import useGRecaptchaResponse from '../../../hooks/useGRecaptchaResponse';
import FormResponseError from '../FormResponseError';

const Form: FunctionComponent<Props> = ({
  errors,
  getValues,
  icon,
  handleSubmit,
  onSubmit,
  isSubmitting,
  submitButtonText,
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
        rightIcon={icon || undefined}
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
