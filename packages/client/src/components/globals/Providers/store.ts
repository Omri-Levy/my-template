import { createStore } from 'little-state-machine';
import initialState from './initialState';

const store = createStore({ initialState });

export default store;
