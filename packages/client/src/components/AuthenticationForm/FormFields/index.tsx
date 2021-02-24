import { FunctionComponent } from 'react';
import { Props } from './types';
import { FaLock, FaAt, FaSignature } from 'react-icons/fa';
import FormField from '../../FormField';
import FormResponseError from '../../FormResponseError';
import { invalidPasswordPolicyMessage } from '@my-template/shared';
import generateHelperText from './generateHelperText';
import clearResponseError from './clearResponseError';

const FormFields: FunctionComponent<Props> = ({errors, clearErrors, register,
																								formType }
) => {
	const isSignUp = formType === `signUp`;
	const helperText = generateHelperText(isSignUp);

	return (
		<>
			{isSignUp &&
			<>
				<FormField
					isRequired
					labelTitle={`First Name:`}
					name={`fname`}
					errors={errors}
					register={register}
					type={`text`}
					maxLength={35}
					icon={FaSignature}
					color={`gray.300`}
					helperText={helperText(`Example: John`)}
				/>
				<FormField
					isRequired
					labelTitle={`Last Name:`}
					name={`lname`}
					errors={errors}
					register={register}
					type={`text`}
					maxLength={35}
					icon={FaSignature}
					color={`gray.300`}
					helperText={helperText(`Example: Doe`)}
				/>
			</>
			}
			<FormField
				onChange={clearResponseError(clearErrors)}
				isRequired
				labelTitle={`Email:`}
				name={`email`}
				errors={errors}
				register={register}
				type={`email`}
				maxLength={320}
				icon={FaAt}
				color={`gray.300`}
				helperText={helperText(`Example: example@address.com`)}
			/>
			<FormField
				onChange={clearResponseError(clearErrors)}
				isRequired
				labelTitle={`Password:`}
				name={`password`}
				errors={errors}
				register={register}
				type={`password`}
				maxLength={128}
				icon={FaLock}
				color={`gray.300`}
				helperText={helperText(invalidPasswordPolicyMessage)}
			/>
			{isSignUp &&
			<FormField
				isRequired
				labelTitle={`Password Confirmation:`}
				name={`passwordConfirmation`}
				errors={errors}
				register={register}
				type={`password`}
				maxLength={128}
				icon={FaLock}
				color={`gray.300`}
				mb={10}
			/>
			}
			<FormResponseError
				errors={errors}
				mb={10}
			/>
		</>
	);
}

export default FormFields;