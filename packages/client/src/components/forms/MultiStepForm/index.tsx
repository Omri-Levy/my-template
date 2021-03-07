import { Box, Button, Icon } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { FaCaretLeft, FaCaretRight } from 'react-icons/all';
import Recaptcha from '../Recaptcha';
import useDisableSubmit from '../../../hooks/useDisableSubmit';
import { Props } from './types';
import useGRecaptchaResponse from '../../../hooks/useGRecaptchaResponse';
import FormResponseError from '../FormResponseError';
import Breadcrumbs from './Breadcrumbs';
import useFormNavigation from './hooks/useFormNavigation';

/**
 * NOTE: navigation to disabled breadcrumb links changing the browser's url is
 * still possible - mostly affects UX and unlikely to happen.
 */
/**
 * TODO: update description
 */
const MultiStepForm: FunctionComponent<Props> = ({
  breadcrumbs,
  isFirstForm,
  errors,
  getValues,
  nextFormPath,
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
  const recaptchaDisablesSubmit = onSubmit ? gRecaptchaResponse : `empty`;
  const { disableSubmit } = useDisableSubmit(
    errors,
    getValues,
    recaptchaDisablesSubmit
  );
  const { previousForm, nextForm } = useFormNavigation(getValues, nextFormPath);

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} disableSubmit={disableSubmit} />
      <Box
        noValidate
        as={`form`}
        onSubmit={
          onSubmit ? handleSubmit(onSubmit(gRecaptchaResponse)) : nextForm
        }
        {...props}
      >
        {children}
        <FormResponseError errors={errors} mb={10} />
        {onSubmit && (
          <Recaptcha
            setGRecaptchaResponse={setGRecaptchaResponse}
            errors={errors}
          />
        )}
        {!isFirstForm && (
          <Button
            onClick={previousForm}
            leftIcon={icons ? <Icon as={FaCaretLeft} mr={0.3} /> : undefined}
            type={`button`}
            mt={4}
            isLoading={isSubmitting}
            disabled={isSubmitting}
            float={`left`}
          >
            Previous
          </Button>
        )}
        <Button
          rightIcon={
            icons ? (
              <Icon as={!onSubmit ? FaCaretRight : submitButtonIcon} mb={0.3} />
            ) : undefined
          }
          type={`submit`}
          mt={4}
          isLoading={isSubmitting}
          disabled={disableSubmit}
          float={`right`}
        >
          {onSubmit ? submitButtonText : `Next`}
        </Button>
      </Box>
    </>
  );
};

export default MultiStepForm;
