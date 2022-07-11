import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GQL_URL } from "../constants";

export const fetchProducts: any = createAsyncThunk<any>(
  "products/FetchProducts",
  async (queryObj:any, { rejectWithValue }) =>{
    try {
        const axios = require("axios").default;

        if(!queryObj.name){
            rejectWithValue("No name provided");
            return null;
        }
        const response = await axios.post(GQL_URL, {
            query: queryObj.query,
            variables:{ name: {"title":queryObj.name}}
          });
          
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {};

const productsSlice: any = createSlice<any, any, any>({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.data = action.payload;
      state.status = "rejected";
    });
  },
});


export const productsReducer = productsSlice.reducer;