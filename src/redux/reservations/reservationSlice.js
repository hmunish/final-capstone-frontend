import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../utility/globalVariable";
import { getLocalStorageAuth } from "../../utility/helper";

axios.defaults.headers.common.Authorization = getLocalStorageAuth();

const initialState = {
  isError: false,
  isLoading: false,
  reservations: null,
  isCreated: false,
};

export const addReservation = createAsyncThunk(
  "reservation/addReservation",
  async ({
    userId, bookingDate: date, location, carId,
  }, thunkAPI) => {
    try {
      console.log(userId);
      const res = await axios.post(
        `${API_URL}/users/${userId}/reservations`,
        {
          location,
          date,
          car_id: carId,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      if (res.status !== 201) throw new Error("Error");
      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue("Error adding reservation");
    }
  },
);

export const reservationSlice = createSlice({
  name: "reservationSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addReservation.fulfilled, (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isCreated = true;
    });
    builder.addCase(addReservation.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addReservation.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
      state.isCreated = false;
    });
  },
});

export default reservationSlice.reducer;
