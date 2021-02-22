import { Button } from '@chakra-ui/react';
import { useMemo, FunctionComponent } from 'react';
import Page from '../Page';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from '@my-template/shared';
import SignUpFormFields from './SignUpFormFields';
import useDisableSubmit from '../../hooks/useDisableSubmit';
import { Redirect } from 'react-router-dom';
import Recaptcha from '../Recaptcha';
import useGRecaptchaResponse from '../../hooks/useGRecaptchaResponse';
import useAuthentication from '../../hooks/useAuthentication';

const SignUp: FunctionComponent = () => {
	const schema = useMemo(() => signUpSchema, []);
	const { errors, handleSubmit, register, formState, getValues } = useForm({
		mode: `onChange`,
		resolver: yupResolver(schema)
	});
	const {isSubmitting, isSubmitSuccessful} = formState;
	const {gRecaptchaResponse, setGRecaptchaResponse} = useGRecaptchaResponse();
	const { disableSubmit } = useDisableSubmit(errors, getValues,
		gRecaptchaResponse);
	const { onSubmit } = useAuthentication(`signUp`);

	if (isSubmitSuccessful) {
		return <Redirect to={{pathname: `/signIn`}} />;
	}

	return (
		<Page title={`Sign Up`}>
			<form onSubmit={handleSubmit(onSubmit(gRecaptchaResponse))}>
				<SignUpFormFields errors={errors} register={register}/>
				<Recaptcha setGRecaptchaResponse={setGRecaptchaResponse} />
				<Button
					type={`submit`}
					mt={4}
					isLoading={isSubmitting}
					disabled={disableSubmit}
				>
					Sign Up
				</Button>
			</form>
		</Page>
	);
};

export default SignUp;
