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
  register={register}
  {...selectProps}
			/>
		</InputGroup>
	);
};

export default SelectGroup;
