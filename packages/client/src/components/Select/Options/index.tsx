import { FunctionComponent } from 'react';
import { Props } from './types';
import Option from './Option';

/**
 * TODO: update description
 */
const Options: FunctionComponent<Props> = ({ options, optionsProps }) => (
  <>
    {options?.map((option) => (
      <Option key={option} option={option} optionsProps={optionsProps} />
    ))}
  </>
);

export default Options;
