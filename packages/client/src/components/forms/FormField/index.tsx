import { FunctionComponent } from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/react';
import { ErrorMessage } from '@hookform/error-message';
import { Props } from './types';
import SelectGroup from '../../SelectGroup';
import InputGroup from '../../InputGroup';

/**
 * @description a single forms field made of Chakra-UI's FormControl,
 * FormLabel, InputGroup, InputLeftAddon, InputGroup/Select, FormHelperText and
 * FormErrorMessage - also uses InputRightAddon, Checkbox and Text for
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
  const selectProps = {
    variant: `filled`,
    placeholder: selectPlaceholder,
    options: selectOptions,
    type,
    name,
  };
  const inputProps = {
    variant: `filled`,
    placeholder: `Type here...`,
    type,
    name,
    maxLength,
    onChange: onChange ?? onChange,
    ref: register,
  };

  return (
    <FormControl
      id={name}
      isInvalid={!!errors[name]?.message}
      mb={5}
      {...props}
    >
      <FormLabel>{labelTitle}</FormLabel>
      {isSelectField ? (
        <SelectGroup
          icon={icon}
          iconColor={iconColor}
          selectOptions={selectOptions}
          register={register}
          selectProps={selectProps}
        />
      ) : (
        <InputGroup icon={icon} iconColor={iconColor} inputProps={inputProps} />
      )}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      <ErrorMessage errors={errors} name={name} as={FormErrorMessage} />
    </FormControl>
  );
};

export default FormField;
