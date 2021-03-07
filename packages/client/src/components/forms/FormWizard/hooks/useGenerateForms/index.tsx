import { useMemo } from 'react';
import { HookReturns } from './types';

const useGenerateForms: HookReturns = (...args) =>
  useMemo(() => [...args], [args]);

export default useGenerateForms;
