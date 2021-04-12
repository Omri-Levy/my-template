import {
  FormControlProps,
  FormLabelProps,
  NumberInputProps,
} from '@chakra-ui/react';

interface ExtendedNumberInputProps extends NumberInputProps {
  activeColor?: string;
}
interface Props extends FormControlProps {
  labelTitle: string;
  labelProps: FormLabelProps;
  inputProps: ExtendedNumberInputProps;
}

export { Props };
