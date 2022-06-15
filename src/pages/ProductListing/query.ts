import { gql} from "@apollo/client";

export const QUERY_PRODUCTS = `
query($name:CategoryInput!){
    category(input:$name){
      name
      products{
        name
      }
    }
}`
