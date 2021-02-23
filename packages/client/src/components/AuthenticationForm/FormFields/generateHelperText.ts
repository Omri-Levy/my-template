import { GenerateHelperTextReturns } from './types';

const generateHelperText: GenerateHelperTextReturns = (isSignUp) =>
  (helperText) => isSignUp ? helperText : undefined;


export default generateHelperText;
