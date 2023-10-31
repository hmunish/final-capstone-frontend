import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '../../utility/globalVariable';

const initialState = {
  isError: false,
  isLoading: false,
  isSignedUp: false,
  username: null,
};

export const signUp = createAsyncThunk(
  'signup/signUp',
  async (username, thunkAPI) => {
    try {
      const res = await axios.post(`${API_URL}/users`, { username });
      if (res.status !== 201) throw new Error('Error');
      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue('Error creating new username');
    }
  },
);

export const signUpSlice = createSlice({
  name: 'signUpSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSignedUp = true;
      state.username = action.payload.data.username;
    });
    builder.addCase(signUp.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
  },
});

export default signUpSlice.reducer;
