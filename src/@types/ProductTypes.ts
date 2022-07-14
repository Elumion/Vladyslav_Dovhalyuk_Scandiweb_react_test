import { CurrencyType, PricesType } from "./CurrenciesListType";

export type ProductCardProps = {
    name: string;
    id: string;
    gallery: string[];
    inStock: boolean;
    prices: PricesType[];
    brand: string;
    selectedPrice?:PricesType,
    currency?:CurrencyType,
    attributes?:AttributeType[],
    count?:number,
    sellectedAttributes?:SelectedAttributesType[] |null
    storeId?:string;
  };

  export type SelectedAttributesType ={
    id:string;
    name:string;
    type:string;
    items:ItemsToAttributeType
  }


  export type AttributeType ={
    id:string;
    name:string;
    type:string;
    items:ItemsToAttributeType[]
  }

  export type ItemsToAttributeType = 
    {
      displayValue:string;
      value:string;
      id:string;
    }

  export type ProductDescriptionType = {
    brand: string;
    id:string;
    category?:string;
    description?:string;
    inStock:boolean;
    name:string;
    gallery:string[];
    attributes:AttributeType[];
    prices:PricesType[];
    sellectedAttributes?:SelectedAttributesType[] |null
  } 

