import { MutableRefObject } from 'react';
import useToast from '../useToast';

type HookReturns = (
  toastRef:
    | MutableRefObject<undefined>
    | {
        current: useToast;
      }
) => undefined;

export { HookReturns };
