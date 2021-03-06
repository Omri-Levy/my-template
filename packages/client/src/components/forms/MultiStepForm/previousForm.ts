import { setSignUpFormDetails } from '../../../redux/reducer';
import { PreviousForm } from './types';

const previousForm: PreviousForm = (dispatch, getValues, goBack) => () => {
  dispatch(setSignUpFormDetails(getValues()));
  goBack();
};

export default previousForm;
