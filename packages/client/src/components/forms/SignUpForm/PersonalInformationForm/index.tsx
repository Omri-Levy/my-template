import { FunctionComponent, useMemo } from 'react';
import { personalInformationSchema } from '@my-template/shared';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';
import FormFields from '../../FormFields';
import MultiStepForm from '../../MultiStepForm';
import { Props } from './types';

/**
 * TODO: update description
 */
const PersonalInformationForm: FunctionComponent<Props> = ({
  breadcrumbs,
  isFirstForm,
  nextFormPath,
}) => {
  const schema = useMemo(() => personalInformationSchema, []);
  const defaultValues = useSelector((state) => state);
  const {
    errors,
    clearErrors,
    handleSubmit,
    register,
    formState,
    getValues,
  } = useForm({
    mode: `onChange`,
    resolver: yupResolver(schema),
    defaultValues,
  });
  const { isSubmitting } = formState;

  return (
    <MultiStepForm
      breadcrumbs={breadcrumbs}
      isFirstForm={isFirstForm}
      errors={errors}
      getValues={getValues}
      handleSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      nextFormPath={nextFormPath}
    >
      <FormFields
        errors={errors}
        clearErrors={clearErrors}
        register={register}
        formType={`personalInformation`}
      />
    </MultiStepForm>
  );
};

export default PersonalInformationForm;
