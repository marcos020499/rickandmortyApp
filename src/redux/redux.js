import axios from "axios";
import {
  configureStore,
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import { api } from "../components/Api";
const initialState = {
  data: [],
  success: false,
  loading: false,
  episode: [],
};
//get characters data
export const fetchDataAsync = createAsyncThunk(
  "fetch/data",
  async ({ query }, thunkAPI) => {
    try {
      const response = await axios.get(`${api}${query}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("error", e.response.data);
    }
  }
);
//get episodes
export const episodesAsync = createAsyncThunk(
  "episode/data",
  async ({ id }, thunkAPI) => {
    console.log('ids',id)
    try {
      const response = await axios.get(`${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("error", e.response.data);
    }
  }
);

export const resetStates = createAction("reset/states");

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
    .addCase(episodesAsync.fulfilled, (state, action) => {
      state.episode.push(action.payload);
    })
    .addCase(resetStates, (state) => {
      state.success = false;
      state.loading = false;
      state.success = false;
      state.episode = [];
    });
});

export const store = configureStore({
  reducer: getReducer,
});
