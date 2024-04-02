// store.js
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsReducer from './contacts/slice';
import filtersReducer from './filters/slice';


const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});


export const store = configureStore({
  reducer: rootReducer,
});

export default store;
