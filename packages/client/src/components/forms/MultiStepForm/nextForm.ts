import { NextForm } from './types';

const nextForm: NextForm = (actions, getValues, nextFormPath, push) => () => {
  actions.updateAction(getValues());

  if (nextFormPath) {
    push(nextFormPath);
  }
};

export default nextForm;
