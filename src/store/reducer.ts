import counterReducer from '../pages/Counter/slice';
import { combineReducers } from '@reduxjs/toolkit';

const reducer = {
  counter: counterReducer,
};

export const rootReducer = combineReducers(reducer);
