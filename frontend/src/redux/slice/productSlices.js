import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"
export const getallproducts = createAsyncThunk(
    'getallproducts',
    async () => {
      const response = await axios("http://localhost:3000/api/products")
      return response.data
    },
  )

const initialState = {
  product:[],
  error:"",
  loading:false
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getallproducts.pending, (state, action) => {
        state.loading=true
     state.product=action.payload
    })
    // fulfilled
    builder.addCase(getallproducts.fulfilled, (state, action) => {
        state.loading=false
     state.product=action.payload
    })
    // rejected
    builder.addCase(getallproducts.rejected, (state, action) => {
       state.error=action.payload
    })
  },
})


export const { } = productSlice.actions

export default productSlice.reducer