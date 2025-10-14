import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type Product from '../../models/Product'
import fetchProducts from '../api/productsApi'
// Then, handle actions in your reducers:

type ResponseType = {
    data: Product[],
    status: "loading" | "idle",
    error:  string | undefined
}

let initialState: ResponseType = {
    data: [],
    status: "idle",
    error: undefined
}


const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading",
        state.data = [];
    }),
    builder.addCase(fetchProducts.fulfilled, (state, action ) => {
      state.data.push(...action.payload);
      state.status = "idle"
    }),
     builder.addCase(fetchProducts.rejected, (state, action  ) => {
      state.data = [];
      state.status = "idle",
      state.error = action.error as string
    })
  },
});

export default productSlice.reducer