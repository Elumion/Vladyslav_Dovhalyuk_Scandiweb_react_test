import {createSlice} from "@reduxjs/toolkit";
import { AttributeType, ItemsToAttributeType } from "../@types/ProductTypes";

const cartSlice = createSlice({
    name:"cart",
    initialState:{data:[],selectedAttributes:{}},
    reducers:{
        addToCart:(state:any, action:any)=>{
            // debugger;
            const product = action.payload;
            const idProduct = product.id;
            if(state.data.some((el:any)=>el.id ===idProduct)){return}
            product.count = 1;
            state.data = [...state.data, product];
        },
        selectAttribute(state:any,action:any){
            // debugger;
            
            
            const selectedAttributes:{productId:string, attributes:(AttributeType)[]} = action.payload;
            const data = JSON.parse(JSON.stringify(state.data))
            const product = data.filter((el:any)=>el.id === selectedAttributes.productId)[0];
            
            if(Array.isArray(action.payload.attributes)){
                // debugger;
                state.selectedAttributes[selectedAttributes.productId] = selectedAttributes.attributes;
                return;
            }
            
            // debugger;
            let indexItem:any;
            const settedAttribute = product.attributes?.filter((el:AttributeType,index:number)=>{
                if(el.id === (selectedAttributes as any).attributes.id){
                    indexItem = index;
                    return true;
                }
            })[0];
            const settedAttributeItem = settedAttribute.items
            .filter((el:ItemsToAttributeType)=> el.id === (selectedAttributes as any).attributes.items[0].id)[0];
            
            state.selectedAttributes[selectedAttributes.productId][indexItem].items = settedAttributeItem;
            // debugger;
        },
        counterProductAdd(state:any,action:any){
            const idProduct = action.payload;
            const data = JSON.parse(JSON.stringify(state.data))
            let indexItem:any;
            const product = data.filter((el:any,index:number)=>{
                if(el.id === idProduct){
                    indexItem = index;
                    return true;
                }
            })[0];
            data[indexItem].count += 1;
            state.data = data;
        },
        counterProductRemove(state:any,action:any){
            const idProduct = action.payload;
            const data = JSON.parse(JSON.stringify(state.data));
            const selectedAttributes = JSON.parse(JSON.stringify(state.selectedAttributes));
            let indexItem:any;
            const product = data.filter((el:any,index:number)=>{
                if(el.id === idProduct){
                    indexItem = index;
                    return true;
                }
            })[0];
            if(data[indexItem].count === 1){
                data.splice(indexItem,1);
                delete selectedAttributes[idProduct];
            }
            else{
                data[indexItem].count -= 1;
            }
            
            state.data = data;
        }
    }
});

export const {addToCart,selectAttribute,counterProductAdd, counterProductRemove} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;