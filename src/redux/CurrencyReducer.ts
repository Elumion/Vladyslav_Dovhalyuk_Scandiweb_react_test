import {createSlice} from "@reduxjs/toolkit";

const selectCurrencySlice = createSlice({
    name:"selectCurrency",
    initialState:{data:{label:"USD", symbol:"$"}},
    reducers:{
        selectCurrency:(state:any, action:any)=>{
            state.data = action.payload;
        }
    }
});

export const {selectCurrency} = selectCurrencySlice.actions;
export const selectCurrencyReducer = selectCurrencySlice.reducer;