
export const QUERY_PRODUCTS = `query($name:CategoryInput){
  category(input:$name){
    name
    products{
      name
      id
      gallery
      inStock
      prices{
        currency{
          label
          symbol
        }
        amount
      }
      brand
    }
  }
    
  }`
