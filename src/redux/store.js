import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './login/loginSlice';
import signupReducer from './signup/signupSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
  },
});

export default store;
