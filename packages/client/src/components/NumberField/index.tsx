import { FunctionComponent } from 'react';
import { FormControl, FormLabel } from '@chakra-ui/react';
import { Props } from './types';
import NumberInput from '../NumberInput';

const NumberField: FunctionComponent<Props> = ({
  labelTitle,
  labelProps,
  inputProps,
  ...props
}) => {
  return (
    <FormControl {...props}>
      <FormLabel {...labelProps}>{labelTitle}</FormLabel>
      <NumberInput {...inputProps} />
    </FormControl>
  );
};

export default NumberField;
