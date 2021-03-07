import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import { reducer } from './reducer';

const persistConfig = {
  key: `root`,
  // session storage
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer);
const persistedStore = persistStore(store);

export { store, persistedStore };
