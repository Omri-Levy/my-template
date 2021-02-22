import { FunctionComponent } from 'react';
import {
	Icon,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
    InputGroup,
    InputLeftElement,
    FormHelperText
} from '@chakra-ui/react';
import { Props } from './types';
import { FaUser, FaLock, FaAt } from 'react-icons/fa';
import { invalidPasswordPolicyMessage } from '@my-template/shared';

const SignUpFormFields: FunctionComponent<Props> = ({errors, register }) => (
		<>
			<FormControl
				isInvalid={!!errors.fullName}
				isRequired={true}
			>
				<FormLabel htmlFor={`fullName`}>
					Full Name:
				</FormLabel>
				<InputGroup>
					<InputLeftElement
						pointerEvents={`none`}
						children={<Icon as={FaUser} color={`gray.300`} />}
					/>
					<Input
						name={`fullName`}
						ref={register}
						maxLength={70}
					/>
				</InputGroup>
				<FormErrorMessage>
					{errors?.fullName?.message}
				</FormErrorMessage>
				<FormHelperText>
					Example: John Doe
				</FormHelperText>
			</FormControl>
			<FormControl
				isInvalid={!!errors.email}
				isRequired={true}
			>
				<FormLabel htmlFor={`email`}>
					Email:
				</FormLabel>
				<InputGroup>
					pointerEvents={`none`}
					<InputLeftElement
						pointerEvents={`none`}
						children={<Icon as={FaAt} color={`gray.300`} />}
					/>
				<Input
					type={`email`}
					name={`email`}
					ref={register}
					maxLength={320}
				/>
				</InputGroup>
				<FormErrorMessage>
					{errors?.email?.message}
				</FormErrorMessage>
				<FormHelperText>
					Example: example@address.com
				</FormHelperText>
			</FormControl>
			<FormControl
				isInvalid={!!errors.password}
				isRequired={true}
			>
				<FormLabel htmlFor={`password`}>
					Password:
				</FormLabel>
				<InputGroup>
					<InputLeftElement
						pointerEvents={`none`}
						children={<Icon as={FaLock} color={`gray.300`} />}
					/>
				<Input
					type={`password`}
					name={`password`}
					ref={register}
					maxLength={70}
				/>
				</InputGroup>
				<FormHelperText>
					{invalidPasswordPolicyMessage}
				</FormHelperText>
				<FormErrorMessage>
					{errors?.password?.message}
				</FormErrorMessage>
			</FormControl>
			<FormControl
				isInvalid={!!errors.passwordConfirmation}
				isRequired={true}
				mb={10}
			>
				<FormLabel htmlFor={`passwordConfirmation`}>
					Password Confirmation:
				</FormLabel>
				<InputGroup>
					<InputLeftElement
						pointerEvents={`none`}
						children={<Icon as={FaLock} color={`gray.300`} />}
					/>
				<Input
					type={`password`}
					name={`passwordConfirmation`}
					ref={register}
					maxLength={70}
				/>
				</InputGroup>
				<FormErrorMessage>
					{errors?.passwordConfirmation?.message}
				</FormErrorMessage>
			</FormControl>
			<FormControl
				isInvalid={!!errors.responseError}
				mb={10}
			>
				<FormErrorMessage>
					{errors?.responseError?.message}
				</FormErrorMessage>
			</FormControl>
		</>
);

export default SignUpFormFields;
