import { FunctionComponent, useState } from 'react';
import {
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { FaEye, FaEyeSlash } from 'react-icons/all';
import { Props } from './types';

/**
 * @description a single forms field made of Chakra-UI's FormControl,
 * FormLabel, InputGroup, InputLeftElement, Input, FormHelperText and,
 * FormErrorMessage - also uses InputRightElement, Checkbox and Text for
 * fields of type password with the ability to show and hide the password
 * using the checkbox.
 */
const FormField: FunctionComponent<Props> = ({
  errors,
  labelTitle,
  type,
  name,
  icon,
  color,
  register,
  maxLength,
  helperText,
  onChange,
  ...props
}) => {
  const [hidePassword, setHidePassword] = useState(true);
  const setPasswordVisibility = () =>
    setHidePassword((prevState) => !prevState);
  const passwordVisibility = hidePassword ? `password` : `text`;
  const isPasswordField = name.match(/password/gi);
  const inputType = isPasswordField ? passwordVisibility : type;
  const passwordVisibilityTitle = hidePassword
    ? `Show Password`
    : `Hide Password`;

  return (
    <FormControl id={name} isInvalid={!!errors[name]} {...props}>
      <FormLabel>{labelTitle}</FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents={`none`}>
          <Icon as={icon} color={color} />
        </InputLeftElement>
        <Input
          onChange={onChange ?? onChange}
          type={inputType}
          name={name}
          ref={register}
          maxLength={maxLength}
        />
        {isPasswordField && (
          <InputRightElement>
            <Icon as={hidePassword ? FaEye : FaEyeSlash} color={color} />
          </InputRightElement>
        )}
      </InputGroup>
      {isPasswordField && (
        <Checkbox
          mt={1}
          title={passwordVisibilityTitle}
          onChange={setPasswordVisibility}
        >
          <Text mb={1}>Show Password</Text>
        </Checkbox>
      )}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      <FormErrorMessage>{errors?.[name]?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default FormField;
