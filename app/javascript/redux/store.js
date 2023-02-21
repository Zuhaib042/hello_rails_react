import {
  combineReducers,
  configureStore,
  applyMiddleware,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import greetingReducer from './greetings';

const reducer = combineReducers({
  greeting: greetingReducer,
});

const store = configureStore(
  {
    reducer,
  },
  applyMiddleware(thunk, logger),
);

export default store;
