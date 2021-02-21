import { Button } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import Page from '../Page';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from './validationSchema';
import SignInFormFields from './SignInFormFields';
import useDisableSubmit from '../../hooks/useDisableSubmit';
import { Redirect } from 'react-router-dom';
import Recaptcha from '../Recaptcha';
import useGRecaptchaResponse from '../../hooks/useGRecaptchaResponse';
import useAuthentication from '../../hooks/useAuthentication';

const SignIn: React.FunctionComponent = () => {
	const schema = useMemo(() => validationSchema, []);
	const { errors, handleSubmit, register, formState, getValues } = useForm({
		mode: `onChange`,
		resolver: yupResolver(schema)
	});
	const {isSubmitting, isSubmitSuccessful} = formState;
	const {gRecaptchaResponse, setGRecaptchaResponse} = useGRecaptchaResponse();
	const { disableSubmit } = useDisableSubmit(errors, getValues, gRecaptchaResponse);
	const { onSubmit } = useAuthentication(`signIn`);

	if (isSubmitSuccessful) {
		return <Redirect to={{pathname: `/`}} />;
	}

	return (
		<Page title={`Sign In`}>
			<form onSubmit={handleSubmit(onSubmit(gRecaptchaResponse))}>
				<SignInFormFields errors={errors} register={register}/>
				<Recaptcha setGRecaptchaResponse={setGRecaptchaResponse} />
				<Button
					type={`submit`}
					mt={4}
					isLoading={isSubmitting}
					disabled={disableSubmit}
				>
					Sign In
				</Button>
			</form>
		</Page>
	);
};

export default SignIn;
