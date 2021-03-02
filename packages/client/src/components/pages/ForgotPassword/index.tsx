import { FunctionComponent, useMemo } from 'react';
import { FaAt, FaRedoAlt } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { forgotPasswordSchema, serverErrorMessage } from '@my-template/shared';
import { Icon } from '@chakra-ui/react';
import Page from '../Page';
import FormField from '../../forms/FormField';
import Form from '../../forms/Form';
import clearResponseError from '../../forms/FormResponseError/clearResponseError';
import { OnSubmit } from '../../../hooks/useAuthentication/types';

const ForgotPassword: FunctionComponent = () => {
  const schema = useMemo(() => forgotPasswordSchema, []);
  const {
    errors,
    clearErrors,
    handleSubmit,
    register,
    setError,
    formState,
    getValues,
  } = useForm({
    mode: `onChange`,
    resolver: yupResolver(schema),
  });
  const { isSubmitting } = formState;
  const onSubmit: OnSubmit = (gRecaptchaResponse) => async (data) => {
    try {
      const newData = { ...data, gRecaptchaResponse };

      console.log(newData);
    } catch (err) {
      let errorMessage = err.response?.data.message;
      const isExpectedErrorMessage = errorMessage === `nothing`;

      if (!isExpectedErrorMessage) {
        errorMessage = serverErrorMessage;
      }

      console.error(err);

      if (setError) {
        setError(`responseError`, {
          message: errorMessage,
        });
      }
    }
  };

  return (
    <Page title={`Forgot Password`} icon={FaRedoAlt}>
      <Form
        errors={errors}
        getValues={getValues}
        icon={<Icon as={FaRedoAlt} />}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
        submitButtonText={`Reset Password`}
      >
        <FormField
          onChange={clearResponseError(clearErrors)}
          isRequired
          errors={errors}
          labelTitle={`Email:`}
          type={`email`}
          name={`email`}
          icon={FaAt}
          color={`gray.300`}
          register={register}
        />
      </Form>
    </Page>
  );
};

export default ForgotPassword;
