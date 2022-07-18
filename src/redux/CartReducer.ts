import {createSlice} from "@reduxjs/toolkit";
import { AttributeType, ProductCardProps, SelectedAttributesType } from "../@types/ProductTypes";

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
                let isHaveSimilarAttributes:boolean|undefined = false;
                let similarAttributesProductId:number = 0;
                for(let i = 0;i<filteredArrayOfProducts.length;i++){
                    
                    if(!Array.isArray(filteredArrayOfProducts[i].sellectedAttributes)){
                        let tmpArr = [];
                        for(let key in filteredArrayOfProducts[i].sellectedAttributes){
                            tmpArr.push( (filteredArrayOfProducts[i] as any).sellectedAttributes[key])
                        }
                        filteredArrayOfProducts[i].sellectedAttributes = tmpArr;
                    }


                     isHaveSimilarAttributes = (filteredArrayOfProducts[i] as any).sellectedAttributes.every((el:SelectedAttributesType,index:any)=>{
                        if(payload.sellectedAttributes){
                           return el.items.id === payload.sellectedAttributes[index].items.id
                        }
                        return false;
                    }) 
                    if(isHaveSimilarAttributes){
                        similarAttributesProductId = i;
                        break;
                    }
                }
                if(isHaveSimilarAttributes){
                    const indexOfProduct:number = data.findIndex((el:ProductCardProps& {storeId:string})=>el.storeId ===filteredArrayOfProducts[similarAttributesProductId].storeId);
                        (data[indexOfProduct] as any).count+=1;
                    state.data = data;
                    
                }
                else{
                    const uniqid = ` ${payload.id}-${Date.now()}`;
                    payload.storeId = uniqid;
                    payload.count = 1;
                    state.data = [...state.data, payload];
                }
            }
        },
        selectAttribute(state:any,action:any){
            const payload:{productId:string, attributes:AttributeType} = action.payload;
            const data:(ProductCardProps)[]  = JSON.parse(JSON.stringify(state.data));
            
            const productId :number = data.findIndex((el:ProductCardProps)=>el.storeId === payload.productId);

            const {id,name,type,items} = payload.attributes;
            const selectedAttributesArr = {
                id,
                name,
                type,
                items: items[0]
            }

            if(!Array.isArray(data[productId].sellectedAttributes)){
                const arrayFromAttributesObj = [];
                for(let key in data[productId].sellectedAttributes){
                    arrayFromAttributesObj.push((data[productId] as any).sellectedAttributes[key])
                }
                data[productId].sellectedAttributes = arrayFromAttributesObj;
            }
            
            try{

                const changeAttributeId:number|undefined = data[productId].sellectedAttributes?.findIndex(el=>el.id === id);
                if(typeof changeAttributeId === "number" )
                (data[productId] as any).sellectedAttributes[changeAttributeId] = selectedAttributesArr;
                
                state.data =data;
            }
            catch(e){
                console.error(e);
            }
        },
        counterProductAdd(state:any,action:any){
            const idProduct = action.payload;
            const data = JSON.parse(JSON.stringify(state.data))
            let indexItem:any;
            data.foreach((el:any,index:number)=>{
                if(el.storeId === idProduct){
                    indexItem = index;
                    return true;
                }
            });
            data[indexItem].count += 1;
            state.data = data;
        },
        counterProductRemove(state:any,action:any){
            const idProduct = action.payload;
            const data = JSON.parse(JSON.stringify(state.data));
            const selectedAttributes = JSON.parse(JSON.stringify(state.selectedAttributes));
            let indexItem:any;
            data.foreach((el:any,index:number)=>{
                if(el.storeId === idProduct){
                    indexItem = index;
                    return true;
                }
            });
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