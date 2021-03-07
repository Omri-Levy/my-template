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
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ErrorMessage } from '@hookform/error-message';
import { Props } from './types';
import Select from '../../Select';

/**
 * @description a single forms field made of Chakra-UI's FormControl,
 * FormLabel, InputGroup, InputLeftElement, Input/Select, FormHelperText and
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
  iconColor,
  register,
  maxLength,
  helperText,
  onChange,
  isSelectField,
  selectPlaceholder,
  selectOptions,
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
    <FormControl
      id={name}
      isInvalid={!!errors[name]?.message}
      mb={5}
      className={isSelectField ? `selectWithIcon` : undefined}
      {...props}
    >
      <FormLabel>{labelTitle}</FormLabel>
      <InputGroup>
        {icon && (
          <InputLeftElement pointerEvents={`none`}>
            <Icon as={icon} color={iconColor} />
          </InputLeftElement>
        )}
        {isSelectField ? (
          <Select
            options={selectOptions}
            name={name}
            register={register}
            placeholder={selectPlaceholder}
          />
        ) : (
          <Input
            onChange={onChange ?? onChange}
            type={inputType}
            name={name}
            ref={register}
            maxLength={maxLength}
          />
        )}
        {isPasswordField && icon && (
          <InputRightElement>
            <Icon as={hidePassword ? FaEye : FaEyeSlash} color={iconColor} />
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
      <ErrorMessage errors={errors} name={name} as={FormErrorMessage} />
    </FormControl>
  );
};

export default FormField;
