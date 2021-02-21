import React from 'react';
import {
	FormControl,
	FormErrorMessage,
	FormLabel, Icon,
	Input, InputGroup, InputLeftElement
} from '@chakra-ui/react';
import { Props } from './types';
import { FaAt, FaLock } from 'react-icons/fa';

const SignInFormFields: React.FunctionComponent<Props> = ({errors, register}) => (
		<>
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
			</FormControl>
			<FormControl
				isInvalid={!!errors.password}
				isRequired={true}
				mb={10}
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
				<FormErrorMessage>
					{errors?.password?.message}
				</FormErrorMessage>
			</FormControl>
		</>
);

export default SignInFormFields;
