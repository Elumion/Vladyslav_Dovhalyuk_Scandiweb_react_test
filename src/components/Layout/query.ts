import { gql} from "@apollo/client";

export const QUERY_CATEGORIES = `query Categories {
    categories {
      name
    }
  }`
