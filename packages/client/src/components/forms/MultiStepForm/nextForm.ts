import { setSignUpFormDetails } from '../../../redux/reducer';
import { NextForm } from './types';

const nextForm: NextForm = (dispatch, getValues, nextFormPath, push) => () => {
  dispatch(setSignUpFormDetails(getValues()));

  if (nextFormPath) {
    push(nextFormPath);
  }
};

export default nextForm;
