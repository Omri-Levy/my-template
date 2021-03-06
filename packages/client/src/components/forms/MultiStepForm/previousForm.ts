import { PreviousForm } from './types';

const previousForm: PreviousForm = (actions, getValues, goBack) => () => {
  actions.updateAction(getValues());
  goBack();
};

export default previousForm;
