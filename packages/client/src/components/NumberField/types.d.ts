import {
  FormControlProps,
  FormLabelProps,
  NumberInputProps
} from '@chakra-ui/react';

interface Props extends FormControlProps {
  labelTitle: string;
  labelProps: FormLabelProps;
  inputProps: NumberInputProps;
}

export { Props };
