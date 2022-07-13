import {createSlice} from "@reduxjs/toolkit";
import { AttributeType, ItemsToAttributeType, ProductCardProps } from "../@types/ProductTypes";

const cartSlice = createSlice({
    name:"cart",
    initialState:{data:[],selectedAttributes:{}},
    reducers:{
        addToCart:(state:any, action:any)=>{
            const payload:(ProductCardProps & {storeId:string}) = action.payload;
            const data:(ProductCardProps & {storeId:string})[] = JSON.parse(JSON.stringify(state.data));
            const filteredArrayOfProducts:(ProductCardProps & {storeId:string})[]  = data.filter((el:ProductCardProps)=>el.id === action.payload.id);
            if(!filteredArrayOfProducts.length){
                const uniqid = ` ${payload.id}-${Date.now()}`;
                payload.storeId = uniqid;
                payload.count = 1;
                state.data = [...state.data, payload];
            }
            else{
                // filteredArrayOfProducts.findIndex(el=>el.attributes)
                for(let i = 0;i<filteredArrayOfProducts.length;i++){
                    debugger;
                     const isHaveSimilarAttributes = filteredArrayOfProducts[i].sellectedAttributes?.every((el,index)=>{
                        if(payload.sellectedAttributes){
                           return el.items.id === payload.sellectedAttributes[index].items.id
                        }
                        return false;
                    }) //пройтись по вибраним атрибутам і знайти чи цей продукт має вибрані атрибути як в прийденого
                    if(isHaveSimilarAttributes){
                        const indexOfProduct:number = data.findIndex((el:ProductCardProps& {storeId:string})=>el.storeId ===filteredArrayOfProducts[i].storeId);
                        debugger;
                            (data[indexOfProduct] as any).count+=1;
                        state.data = data;
                        return;
                        
                    }
                    else{
                        debugger;
                        const uniqid = ` ${payload.id}-${Date.now()}`;
                        payload.storeId = uniqid;
                        payload.count = 1;
                        state.data = [...state.data, payload];
                        return;
                    }
                }
            }
            // debugger;
        },
        selectAttribute(state:any,action:any){
            const payload:{productId:string, attributes:AttributeType[]} = action.payload;
            const data = JSON.parse(JSON.stringify(state.data));
            
            const filteredArrayOfProducts:ProductCardProps[] = data.filter((el:ProductCardProps)=>el.id === payload.productId);
            
            debugger;
            




            
            // const selectedAttributes:{productId:string, attributes:(AttributeType)[]} = action.payload;
            // const product = data.filter((el:any)=>el.id === selectedAttributes.productId)[0];
            
            // if(Array.isArray(action.payload.attributes)){
            //     // debugger;
            //     state.selectedAttributes[selectedAttributes.productId] = selectedAttributes.attributes;
            //     return;
            // }
            
            // // debugger;
            // let indexItem:any;
            // const settedAttribute = product.attributes?.filter((el:AttributeType,index:number)=>{
            //     if(el.id === (selectedAttributes as any).attributes.id){
            //         indexItem = index;
            //         return true;
            //     }
            // })[0];
            // const settedAttributeItem = settedAttribute.items
            // .filter((el:ItemsToAttributeType)=> el.id === (selectedAttributes as any).attributes.items[0].id)[0];
            
            // // state.selectedAttributes[selectedAttributes.productId][indexItem].items = settedAttributeItem;
            // state.data[]
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