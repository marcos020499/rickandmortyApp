import axios from "axios";
import {
  configureStore,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { api } from "../components/Api";
const initialState = {
  data: [],
  success: false,
  loading: false,
  error: false,
};

export const fetchDataAsync = createAsyncThunk(
  "fetch/data",
  async ({ query }, thunkAPI) => {
    try {
      const response = await axios.get(
        `${api}${query}`,
      );
      console.log(response.data)
      return response.data;
    } catch (e) {
      console.log(e.response.data)
      return thunkAPI.rejectWithValue("error", e.response.data);
    }
  }
);
export const getReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchDataAsync.fulfilled, (state, action) => {
      state.data = action.payload;
      state.success = true;
      state.error = false;
      state.loading = false;
    })
    .addCase(fetchDataAsync.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchDataAsync.rejected, (state) => {
      state.error = true;
      state.success = false;
      state.loading = false;
    });
});

export const store = configureStore({
  reducer: getReducer,
});
