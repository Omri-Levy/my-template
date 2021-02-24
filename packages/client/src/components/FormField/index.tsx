import { FunctionComponent } from 'react';
import {
  FormControl,
  FormErrorMessage, FormHelperText,
  FormLabel,
  Icon, Input,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react';
import {Props} from './types';

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

  return (
    <FormControl
      id={name}
      isInvalid={!!errors[name]}
      {...props}
    >
      <FormLabel>
        {labelTitle}
      </FormLabel>
      <InputGroup>
        <InputLeftElement
          pointerEvents={`none`}
          children={<Icon as={icon} color={color} />}
        />
        <Input
          onChange={onChange ?? onChange}
          type={type}
          name={name}
          ref={register}
          maxLength={maxLength}
        />
      </InputGroup>
      {helperText &&
        <FormHelperText>
          {helperText}
        </FormHelperText>
      }
      <FormErrorMessage>
        {errors?.[name]?.message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default FormField;
