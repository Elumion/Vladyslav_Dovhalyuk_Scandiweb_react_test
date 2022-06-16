export type ProductCardProps = {
    name: string;
    id: string;
    gallery: string[];
    inStock: boolean;
    prices: {
      currency: {
        label: string;
        symbol: string;
      };
      amount: number;
    }[];
    brand: string;
  };