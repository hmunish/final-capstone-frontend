import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getUserIdFromToken,
  getUserNameFromToken,
  getLocalStorageAuth,
  setLocalStorageAuth,
} from '../../utility/helper';

const API_URL = 'http://localhost:3000/api/v1/login';

const initialState = {
  username: null,
  userId: null,
  isLoading: false,
  isError: false,
  isLogIn: false,
  isNewLoginError: false,
};

export const isLogIn = createAsyncThunk(
  'login/isLogIn',
  async (_, thunkAPI) => {
    try {
      const Authorization = getLocalStorageAuth();
      const username = getUserNameFromToken(Authorization);
      const res = await axios.post(
        API_URL,
        { username },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      if (res.status !== 200) throw new Error('Error');
      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  },
);

export const logIn = createAsyncThunk(
  'login/logIn',
  async (username, thunkAPI) => {
    try {
      const res = await axios.post(
        API_URL,
        { username },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      console.log(res);
      if (res.status !== 200) throw new Error('Error');
      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  },
);

export const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(isLogIn.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isLogIn = true;
      state.username = action.payload.data.username;
      state.userId = getUserIdFromToken(action.payload.data.token);
    });
    builder.addCase(isLogIn.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(isLogIn.rejected, (state) => {
      state.isLoading = false;
      state.isError = 'Error Logging In';
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isLogIn = true;
      state.username = action.payload.data.username;
      state.userId = getUserIdFromToken(action.payload.data.token);
      setLocalStorageAuth(action.payload.data.token);
    });
    builder.addCase(logIn.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logIn.rejected, (state, action) => {
      state.isLoading = false;
      state.isNewLoginError = action.payload;
    });
  },
});

export default loginSlice.reducer;
