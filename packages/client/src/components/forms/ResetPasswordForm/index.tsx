import { FunctionComponent, useMemo } from 'react';
import { FaRedoAlt } from 'react-icons/fa';
import {
  invalidSecurityInformationMessage,
  resetPasswordSchema,
} from '@my-template/shared';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory, useParams } from 'react-router-dom';
import FormFields from '../FormFields';
import Form from '../Form';
import onSubmit from '../onSubmit';
import { Params } from '../../pages/ResetPassword/types';
import useSuccessToast from '../../../hooks/ui/useSuccessToast';

/**
 * TODO: update description
 */
const ResetPasswordForm: FunctionComponent = () => {
  const schema = useMemo(() => resetPasswordSchema, []);
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
  const params: Params = useParams();
  const { token } = params;
  const { push } = useHistory();
  const { toast, toastOptions } = useSuccessToast(
    `Your password has been updated successfully.`
  );
  const callback = () => {
    push(`/signIn`, {
      toast: toast(toastOptions),
    });
  };
  const submitFn = onSubmit(
    `resetPassword`,
    setError,
    [invalidSecurityInformationMessage],
    callback,
    token
  );

  return (
    <Form
      errors={errors}
      getValues={getValues}
      handleSubmit={handleSubmit}
      onSubmit={submitFn}
      isSubmitting={isSubmitting}
      submitButtonText={`Reset Password`}
      submitButtonIcon={FaRedoAlt}
    >
      <FormFields
        errors={errors}
        clearErrors={clearErrors}
        register={register}
        formType={`resetPassword`}
      />
    </Form>
  );
};

export default ResetPasswordForm;
