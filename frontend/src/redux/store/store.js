import { configureStore } from '@reduxjs/toolkit'
import productReducers from "../slice/productSlices"

export const store = configureStore({
  reducer: {
    products:productReducers,
  },
})