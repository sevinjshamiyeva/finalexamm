import { configureStore } from '@reduxjs/toolkit'
import productReducers from "../slice/productSlices"
import wishlistSlices from '../slice/wishlistSlices'

export const store = configureStore({
  reducer: {
    products:productReducers,
    wishlists:wishlistSlices
  },
})