import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getLocalStorageAuth } from '../../utility/helper';
import { API_URL } from '../../utility/globalVariable';

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
  value: null,
  length: null,
};

export const getCars = createAsyncThunk('cars/getCars', async () => {
  try {
    const authToken = getLocalStorageAuth();
    const response = await axios(`${API_URL}/users/1/cars`, {
      headers: {
        Authorization: `Bearer ${authToken}`, // Include the Authorization header with the token
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
});

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    nextCar(state, action) {
      state.value = action.payload > state.length ? 6 : action.payload;
    },
    prevCar(state, action) {
      state.value = action.payload < 6 ? state.length : action.payload;
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
