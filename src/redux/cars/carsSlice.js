import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
  value: null,
  length: null,
};

const url = 'http://localhost:3000/api/v1/users/1/cars';

export const getCars = createAsyncThunk(
  'cars/getCars',
  async () => {
    try {
      const response = await axios(url);
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
);

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    nextCar(state, action) {
      // console.log('action', action.payload);
      // console.log('state', state);
      state.value = action.payload > state.length ? 1 : action.payload;
    },
    prevCar(state, action) {
      state.value = action.payload < 1 ? state.length : action.payload;
    },
    dotCar() {},
  },
  extraReducers: {
    [getCars.pending]: (state) => {
      state.isLoading = true;
    },
    [getCars.fulfilled]: (state, action) => {
      const data = action.payload;
      const newdata = data.map((car) => ({
        id: car.id,
        name: car.name,
        description: car.description,
      }));
      state.isLoading = false;
      state.cars = newdata;
      state.length = newdata.length;
      state.value = newdata.length - (newdata.length - 1);
    },
    [getCars.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { nextCar, prevCar, dotCar } = carsSlice.actions;
export default carsSlice.reducer;
