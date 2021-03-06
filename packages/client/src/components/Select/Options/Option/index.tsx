import { FunctionComponent } from 'react';
import { Props } from './types';

/**
 * TODO: update description
 */
const Option: FunctionComponent<Props> = ({ option }) => (
  <option value={option}>{option}</option>
);

export default Option;
