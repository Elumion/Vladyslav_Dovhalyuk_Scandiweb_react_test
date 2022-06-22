
import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './CartReducer'
import { categoriesReducer } from './CategoriesReducer'
import { selectCurrencyReducer } from './CurrencyReducer'
import { productsReducer } from './ProductsReducer'

export const store = configureStore({
  reducer: {
    categories:categoriesReducer,
    products:productsReducer,
    currency:selectCurrencyReducer,
    cart:cartReducer
  },
})
