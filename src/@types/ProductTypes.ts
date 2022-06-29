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
    count?:number
  };

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

