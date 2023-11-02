import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getLocalStorageAuth } from "../../utility/helper";
import { API_URL } from "../../utility/globalVariable";

axios.defaults.headers.common.Authorization = getLocalStorageAuth();

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
  value: null,
  length: null,
};

export const getCars = createAsyncThunk("cars/getCars", async (_, thunkAPI) => {
  try {
    const authToken = getLocalStorageAuth();
    const response = await axios(`${API_URL}/users/1/cars`, {
      headers: {
        Authorization: `Bearer ${authToken}`, // Include the Authorization header with the token
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Error fetching cars");
  }
});

export const addCar = createAsyncThunk(
  "cars/addCar",
  async ({
    userId,
    name, image, description, deposit,
    financeFee, optionToPurchaseFee, totalAmountPayable, duration,
  }, thunkAPI) => {
    try {
      const response = await axios.post(
        `${API_URL}/users/${userId}/cars`,
        {
          name,
          image,
          description,
          deposit,
          finance_fee: financeFee,
          option_to_purchase_fee: optionToPurchaseFee,
          total_amount_payable: totalAmountPayable,
          duration,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      if (response.status !== 201) throw new Error("error");
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error adding reservation");
    }
  },
);

const carsSlice = createSlice({
  name: "cars",
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
    [addCar.pending]: (state) => {
      state.isLoading = true;
    },
    [addCar.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cars = action.payload.status.data;
      console.log(action.payload.status.data);
    },
    [addCar.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { nextCar, prevCar, dotCar } = carsSlice.actions;
export default carsSlice.reducer;
