import { AsyncUseEffect } from './types';

const asyncUseEffect: AsyncUseEffect = async (callback) => await callback();

export default asyncUseEffect;
