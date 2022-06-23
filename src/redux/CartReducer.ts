import {createSlice} from "@reduxjs/toolkit";
import { AttributeType, ItemsToAttributeType } from "../@types/ProductTypes";

const cartSlice = createSlice({
    name:"cart",
    initialState:{data:[],selectedAttributes:{}},
    reducers:{
        addToCart:(state:any, action:any)=>{
            const idProduct = action.payload.id;
            if(state.data.some((el:any)=>el.id ===idProduct))return
            
            state.data = [...state.data, action.payload];
        },
        selectAttribute(state:any,action:any){
            const selectedAttributes:{productId:string, attributes:(AttributeType & {items:ItemsToAttributeType})[]} = action.payload;
            const productsInCart = state.data;
            state.selectedAttributes[selectedAttributes.productId] = selectedAttributes.attributes;
        }
    }
});

export const {addToCart,selectAttribute} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;