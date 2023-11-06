import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login/loginSlice";
import signupReducer from "./signup/signupSlice";
import carsReducer from "./cars/carsSlice";
import reservationReducer from "./reservations/reservationSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    cars: carsReducer,
    reservations: reservationReducer,
  },
});

export default store;
