import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{data:[]},
    reducers:{
        addToCart:(state:any, action:any)=>{
            state.data = [...state.data, action.payload];
        }
    }
});

export const {addToCart} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;