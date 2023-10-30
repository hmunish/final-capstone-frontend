import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000/api/v1/login';

export const isLogIn = createAsyncThunk(
  'login/isLogIn',
  async (_, thunkAPI) => {
    try {
      const Authorization = localStorage.getItem('authKey');
      const decoded = jwtDecode(Authorization);
      const { username } = decoded;
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

const initialState = {
  isLoading: false,
  isError: false,
  isLogIn: false,
};

export const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(isLogIn.fulfilled, (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isLogIn = true;
    });
    builder.addCase(isLogIn.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(isLogIn.rejected, (state) => {
      state.isLoading = false;
      state.isError = 'Error Loggin In';
    });
  },
});

export default loginSlice.reducer;
