import { Button } from '@chakra-ui/react';
import { useMemo, FunctionComponent } from 'react';
import Page from '../Page';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInSchema, signUpSchema } from '@my-template/shared';
import FormFields from './FormFields';
import useDisableSubmit from '../../hooks/useDisableSubmit';
import { Redirect } from 'react-router-dom';
import Recaptcha from '../Recaptcha';
import useGRecaptchaResponse from '../../hooks/useGRecaptchaResponse';
import useAuthentication from '../../hooks/useAuthentication';
import { Props } from './types';

const AuthenticationForm: FunctionComponent<Props> = ({ formType }) => {
	const formTitle = formType === `signUp` ? `Sign Up` : `Sign In`;
	const schema = useMemo(() => (
		formType === `signUp` ? signUpSchema : signInSchema
	), [formType]);
	const { errors, setError, handleSubmit, register, formState, getValues
	} = useForm({
		mode: `onChange`,
		resolver: yupResolver(schema)
	});
	const {isSubmitting, isSubmitSuccessful} = formState;
	const {gRecaptchaResponse, setGRecaptchaResponse} = useGRecaptchaResponse();
	const { disableSubmit } = useDisableSubmit(errors, getValues,
		gRecaptchaResponse);
	const { onSubmit } = useAuthentication(formType, setError);
	const shouldRedirect = isSubmitSuccessful && !errors.responseError;

	if (shouldRedirect) {
		const pathname = formType === `signIn` ? `/` : `signIn`;

		return <Redirect to={{pathname}} />;
	}

	return (
		<Page title={formTitle}>
			<form onSubmit={handleSubmit(onSubmit(gRecaptchaResponse))}>
				<FormFields
					errors={errors}
					register={register}
					formType={formType}
				/>
				<Recaptcha setGRecaptchaResponse={setGRecaptchaResponse} />
				<Button
					type={`submit`}
					mt={4}
					isLoading={isSubmitting}
					disabled={disableSubmit}
				>
					{formTitle}
				</Button>
			</form>
		</Page>
	);
};

export default AuthenticationForm;
