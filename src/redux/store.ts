
import { configureStore } from '@reduxjs/toolkit'
import { categoriesReducer } from './CategoriesReducer'

export const store = configureStore({
  reducer: {
    categories:categoriesReducer
  },
})
