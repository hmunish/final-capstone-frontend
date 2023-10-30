import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
};

const url = 'http://localhost:3000/api/v1/users/1/cars';

export const getCars = createAsyncThunk(
  'cars/getCars',
  async () => {
    try {
      const response = await axios(url);
      console.log(response.data);
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
  reducers: {},
  extraReducers: {
    [getCars.pending]: (state) => {
      state.isLoading = true;
    },
    [getCars.fulfilled]: (state, action) => {
      const data = action.payload;
      const newdata = data.map((car) => ({
        id: car.car_id,
        name: car.car_name,
        description: car.description,
      }));
      state.isLoading = false;
      state.cars = newdata;
    },
    [getCars.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default carsSlice.reducer;
