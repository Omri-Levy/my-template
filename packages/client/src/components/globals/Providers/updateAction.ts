import { GlobalState } from 'little-state-machine';
import { Payload } from '../../../utils/types';

const updateAction = (state: GlobalState, payload: Payload) => ({
  ...state,
  ...payload,
});

export default updateAction;
