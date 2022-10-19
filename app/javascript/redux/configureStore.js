import { configureStore } from "@reduxjs/toolkit";
import greetingsReducer from "./greetings/greetings";

const reducer = {
  greeting: greetingsReducer,
};

const store = configureStore({ reducer });
export default store;
