import { Box, Button, Icon } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { useStateMachine } from 'little-state-machine';
import { FaCaretLeft, FaCaretRight } from 'react-icons/all';
import Recaptcha from '../Recaptcha';
import useDisableSubmit from '../../../hooks/useDisableSubmit';
import { Props } from './types';
import useGRecaptchaResponse from '../../../hooks/useGRecaptchaResponse';
import updateAction from '../../globals/Providers/updateAction';
import FormResponseError from '../FormResponseError';
import Breadcrumbs from '../../Breadcrumbs';
import nextForm from './nextForm';
import previousForm from './previousForm';

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
  const { goBack, push } = useHistory();
  const { actions } = useStateMachine({ updateAction });
  const nextFormFn = nextForm(actions, getValues, nextFormPath, push);
  const previousFormFn = previousForm(actions, getValues, goBack);

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Box
        as={`form`}
        onSubmit={
          onSubmit ? handleSubmit(onSubmit(gRecaptchaResponse)) : nextFormFn
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
            onClick={previousFormFn}
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
