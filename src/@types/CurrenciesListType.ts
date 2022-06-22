export type CurrencyType = {
    label:string;
    symbol:string;
}

export type PricesType = {
    currency:{
        label:string;
        symbol:string;
    }
    amount:number;
}