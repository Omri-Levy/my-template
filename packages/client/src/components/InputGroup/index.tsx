import { FunctionComponent, useState } from 'react';
import {
  Checkbox,
  Icon,
  Input,
  InputGroup as ChakraInputGroup,
  InputLeftAddon,
  InputRightAddon,
  Text,
} from '@chakra-ui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Props } from './types';

const InputGroup: FunctionComponent<Props> = ({
  icon,
  iconColor,
  inputProps,
  checkboxColor,
  ...props
}) => {
  const { name, type } = inputProps;
  const [hidePassword, setHidePassword] = useState(true);
  const setPasswordVisibility = () =>
    setHidePassword((prevState) => !prevState);
  const passwordVisibility = hidePassword ? `password` : `text`;
  const isPasswordField = name?.match(/password/gi);
  const inputType = isPasswordField ? passwordVisibility : type;
  const passwordVisibilityTitle = hidePassword
    ? `Show Password`
    : `Hide Password`;

  return (
    <>
      <ChakraInputGroup {...props}>
        {icon && (
          <InputLeftAddon pointerEvents={`none`}>
            <Icon as={icon} color={iconColor} />
          </InputLeftAddon>
        )}
        <Input {...inputProps} type={inputType} />
        {isPasswordField && icon && (
          <InputRightAddon>
            <Icon as={hidePassword ? FaEye : FaEyeSlash} color={iconColor} />
          </InputRightAddon>
        )}
      </ChakraInputGroup>
      {isPasswordField && (
        <Checkbox
          mt={1}
          title={passwordVisibilityTitle}
          onChange={setPasswordVisibility}
          colorScheme={checkboxColor || `purple`}
        >
          <Text mt={0.5}>Show Password</Text>
        </Checkbox>
      )}
    </>
  );
};

export default InputGroup;
