import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { registryReducer } from './registrySlice';

const rootReducer = combineReducers({
  registry: registryReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
