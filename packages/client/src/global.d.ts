import 'little-state-machine';
import { SignUpFormFields } from './components/pages/SignUp/types';

// eslint-disable-next-line
declare module 'little-state-machine' {
  type GlobalState = SignUpFormFields;
}
