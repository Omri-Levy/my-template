import { FunctionComponent, useMemo } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { securityInformationSchema } from '@my-template/shared';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';
import FormFields from '../../FormFields';
import MultiStepForm from '../../MultiStepForm';
import { Props } from './types';
import useSignUp from '../../../../hooks/useSignUp';

/**
 * TODO: update description
 */
const SecurityInformationForm: FunctionComponent<Props> = ({ breadcrumbs }) => {
  const schema = useMemo(() => securityInformationSchema, []);
  const defaultValues = useSelector((state) => state);
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
  const signUp = useSignUp(setError);

  return (
    <MultiStepForm
      breadcrumbs={breadcrumbs}
      errors={errors}
      getValues={getValues}
      handleSubmit={handleSubmit}
      onSubmit={signUp}
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
