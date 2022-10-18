import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from 'app/javascript/redux/greetings/greetings';

const reducer = {
  greetings: greetingsReducer,
};

const store = configureStore({ reducer });
export default store;