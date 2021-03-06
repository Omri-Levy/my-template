import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSignUpFormDetails } from '../../../../../redux/reducer';
import { HookReturns } from '../../types';

const useFormNavigation: HookReturns = (getValues, nextFormPath) => {
  const { goBack, push } = useHistory();
  const dispatch = useDispatch();

  const previousForm = () => {
    dispatch(setSignUpFormDetails(getValues()));
    goBack();
  };

  const nextForm = () => {
    dispatch(setSignUpFormDetails(getValues()));

    if (nextFormPath) {
      push(nextFormPath);
    }
  };

  return { previousForm, nextForm };
};

export default useFormNavigation;
