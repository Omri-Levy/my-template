import { FunctionComponent } from 'react';
import { Icon, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import Select from '../Select';
import { Props } from './types';

const SelectGroup: FunctionComponent<Props> = ({
  icon,
  iconColor,
  selectOptions,
  register,
  selectProps,
  optionsProps,
  activeColor,
  ...props
}) => {
  return (
    <InputGroup {...props}>
      {icon && (
        <InputLeftAddon pointerEvents={`none`}>
          <Icon as={icon} color={iconColor} />
        </InputLeftAddon>
      )}
      <Select
        options={selectOptions}
        optionsProps={optionsProps}
        register={register}
        activeColor={activeColor}
        {...selectProps}
      />
    </InputGroup>
  );
};

export default SelectGroup;
