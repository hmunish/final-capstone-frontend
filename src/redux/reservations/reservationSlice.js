import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../utility/globalVariable";
import { getLocalStorageAuth } from "../../utility/helper";

const initialState = {
  isError: false,
  isLoading: false,
  reservations: null,
  isCreated: false,
};

export const getReservations = createAsyncThunk(
  "reservation/getReservations",
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(
        `${API_URL}/users/${userId}/reservations`,
        { headers: { Authorization: getLocalStorageAuth() } }
      );
      if (response.status !== 200) throw new Error("Error");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("Error fetching reservations");
    }
  }
);

export const addReservation = createAsyncThunk(
  "reservation/addReservation",
  async ({ userId, bookingDate: date, location, carId }, thunkAPI) => {
    try {
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
            Authorization: getLocalStorageAuth(),
          },
        }
      );
      if (res.status !== 201) throw new Error("Error");
      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue("Error adding reservation");
    }
  }
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
    builder.addCase(getReservations.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.reservations = action.payload.status.data;
    });
    builder.addCase(getReservations.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getReservations.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
  },
});

export default reservationSlice.reducer;
