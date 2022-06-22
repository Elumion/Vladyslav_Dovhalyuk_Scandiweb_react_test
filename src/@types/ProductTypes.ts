import { CurrencyType, PricesType } from "./CurrenciesListType";

export type ProductCardProps = {
    name: string;
    id: string;
    gallery: string[];
    inStock: boolean;
    prices: PricesType[];
    brand: string;
    selectedPrice?:PricesType,
    currency?:CurrencyType
  };

  export type AttributeType ={
    id:string;
    name:string;
    type:string;
    items:{
      displayValue:string;
      value:string;
      id:string;
    }[]
  }

