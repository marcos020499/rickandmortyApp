import axios from "axios";
import {
  configureStore,
  createReducer,
  createAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
const tokenInitial =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcm9udGVuZCI6dHJ1ZX0.dD52Ff9SFC3DO2nseBhhuuzCmMHdE7Q4QQnlCLlZviw";

const initialState = {
  data: [],
  success: false,
  loading: false,
  error: false,
};

export const fetchDataAsync = createAsyncThunk(
  "ticket/user",
  async ({ data }, thunkAPI) => {
    try {
      const response = await axios.post(
        `${Route_Gateway}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (e) {
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
    .addCase(fetchDataAsync.loading, (state) => {
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
