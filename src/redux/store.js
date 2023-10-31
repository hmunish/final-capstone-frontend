import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './login/loginSlice';
import signupReducer from './signup/signupSlice';
import carsReducer from './cars/carsSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    cars: carsReducer,
  },
});

export default store;
