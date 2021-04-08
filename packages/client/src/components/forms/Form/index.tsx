import { Box, Button, Flex, Icon } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import Recaptcha from '../Recaptcha';
import useDisableSubmit from '../../../hooks/forms/useDisableSubmit';
import { Props } from './types';
import useGRecaptchaResponse from '../../../hooks/forms/useGRecaptchaResponse';
import FormResponseError from '../FormResponseError';
import Card from '../../Card';
import useColorModeShade from '../../../hooks/ui/useColorModeShade';

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
  submitButtonColor,
  children,
  useRecaptcha = true,
  ...props
}) => {
  const { gRecaptchaResponse, setGRecaptchaResponse } = useGRecaptchaResponse();
  const disableSubmit = useDisableSubmit(errors, getValues, gRecaptchaResponse);
  const { colorModeShadeInverted } = useColorModeShade(
    submitButtonColor || `green`
  );

  return (
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
        <Flex justifyContent={`flex-end`}>
          <Button
            rightIcon={
              icons ? <Icon as={submitButtonIcon} mb={0.5} /> : undefined
            }
            type={`submit`}
            mt={4}
            isLoading={isSubmitting}
            disabled={disableSubmit}
            border={`2px solid`}
            borderColor={colorModeShadeInverted}
          >
            {submitButtonText}
          </Button>
        </Flex>
      </Box>
    </Card>
  );
};

export default Form;
