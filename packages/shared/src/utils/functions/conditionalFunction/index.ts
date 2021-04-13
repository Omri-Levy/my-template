import { Callback } from './types';

const conditionalFunction = (
  condition: boolean,
  cb: Callback
): Callback | undefined => (condition ? cb : undefined);

export default conditionalFunction;
