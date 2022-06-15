import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GQL_URL } from "../constants";

export const fetchCategories: any = createAsyncThunk<any>(
  "categories/FetchCategories",
  async (query, { rejectWithValue }) =>{
    try {
        const axios = require("axios").default;
        const response = await axios.post(GQL_URL, {
            query: query,
          });
          
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {};

const categoriesSlice: any = createSlice<any, any, any>({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.data = action.payload;
      state.status = "rejected";
    });
  },
});


export const categoriesReducer = categoriesSlice.reducer;