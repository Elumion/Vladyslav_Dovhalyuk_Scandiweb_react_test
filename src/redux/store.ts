
import { configureStore } from '@reduxjs/toolkit'
import { categoriesReducer } from './CategoriesReducer'
import { productsReducer } from './ProductsReducer'

export const store = configureStore({
  reducer: {
    categories:categoriesReducer,
    products:productsReducer
  },
})
