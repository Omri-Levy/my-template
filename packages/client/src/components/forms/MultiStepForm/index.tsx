import { Box, Button, Flex, Icon } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import Recaptcha from '../Recaptcha';
import useDisableSubmit from '../../../hooks/forms/useDisableSubmit';
import { Props } from './types';
import useGRecaptchaResponse from '../../../hooks/forms/useGRecaptchaResponse';
import FormResponseError from '../FormResponseError';
import Breadcrumbs from './Breadcrumbs';
import useFormNavigation from './hooks/useFormNavigation';
import useColorModeShade from '../../../hooks/ui/useColorModeShade';
import useDarkMode from '../../../hooks/ui/useDarkMode';

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
  submitButtonColor,
  children,
  ...props
}) => {
  const { gRecaptchaResponse, setGRecaptchaResponse } = useGRecaptchaResponse();
  const recaptchaDisablesSubmit = onSubmit ? gRecaptchaResponse : `empty`;
  const disableSubmit = useDisableSubmit(
    errors,
    getValues,
    recaptchaDisablesSubmit
  );
  const { previousForm, nextForm } = useFormNavigation(getValues, nextFormPath);
  const { colorModeShadeInverted: submitBorderColor } = useColorModeShade(
    onSubmit ? submitButtonColor || `green` : submitButtonColor || `purple`
  );
  const { colorModeShadeInverted: formNavBorderColor } = useColorModeShade(
    `purple`
  );
  const { darkModeTextColorInverted } = useDarkMode();
  const sharedProps = {
    color: darkModeTextColorInverted,
    boxShadow: `none`,
  };
  const focusAndHoverSubmit = !disableSubmit
    ? {
        backgroundColor: submitBorderColor,
        borderColor: submitBorderColor,
        ...sharedProps,
      }
    : undefined;
  const focusAndHoverFormNav = !isSubmitting
    ? {
        backgroundColor: formNavBorderColor,
        ...sharedProps,
      }
    : undefined;

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
        <Flex justifyContent={!isFirstForm ? `space-between` : `flex-end`}>
          {!isFirstForm && (
            <Button
              onClick={previousForm}
              leftIcon={
                icons ? <Icon as={FaCaretLeft} mr={0.3} mb={0.5} /> : undefined
              }
              type={`button`}
              mt={4}
              disabled={isSubmitting}
              border={`2px solid`}
              borderColor={formNavBorderColor}
              _hover={focusAndHoverFormNav}
              _focus={focusAndHoverFormNav}
            >
              Previous
            </Button>
          )}
          <Button
            rightIcon={
              icons ? (
                <Icon
                  as={!onSubmit ? FaCaretRight : submitButtonIcon}
                  mb={0.5}
                />
              ) : undefined
            }
            type={`submit`}
            mt={4}
            isLoading={isSubmitting}
            disabled={disableSubmit}
            border={`2px solid`}
            borderColor={submitBorderColor}
            _hover={focusAndHoverSubmit}
            _focus={focusAndHoverSubmit}
          >
            {onSubmit ? submitButtonText : `Next`}
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default MultiStepForm;
