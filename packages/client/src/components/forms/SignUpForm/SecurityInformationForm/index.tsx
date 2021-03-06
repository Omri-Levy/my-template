import { FunctionComponent, useMemo } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { securityInformationSchema } from '@my-template/shared';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useStateMachine } from 'little-state-machine';
import FormFields from '../../FormFields';
import MultiStepForm from '../../MultiStepForm';
import updateAction from '../../../globals/Providers/updateAction';
import useAuthentication from '../../../../hooks/useAuthentication';
import { Props } from './types';

/**
 * TODO: update description
 */
const SecurityInformationForm: FunctionComponent<Props> = ({ breadcrumbs }) => {
  const schema = useMemo(() => securityInformationSchema, []);
  const { state } = useStateMachine({ updateAction });
  const defaultValues = state;
  const {
    errors,
    clearErrors,
    handleSubmit,
    register,
    formState,
    getValues,
    setError,
  } = useForm({
    mode: `onChange`,
    resolver: yupResolver(schema),
    defaultValues,
  });
  const { isSubmitting } = formState;
  const { onSubmit } = useAuthentication(`signUp`, setError);

  return (
    <MultiStepForm
      breadcrumbs={breadcrumbs}
      errors={errors}
      getValues={getValues}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      isSubmitting={isSubmitting}
      submitButtonText={`Sign Up`}
      submitButtonIcon={FaUserPlus}
    >
      <FormFields
        errors={errors}
        clearErrors={clearErrors}
        register={register}
        formType={`securityInformation`}
      />
    </MultiStepForm>
  );
};

export default SecurityInformationForm;
