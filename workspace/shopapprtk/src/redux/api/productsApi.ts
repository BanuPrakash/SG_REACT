import { createAsyncThunk } from '@reduxjs/toolkit'


// First, create the thunk
const fetchProducts = createAsyncThunk(
  'products',
  async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=5')
    return await response.json();
  },
)

export default fetchProducts;

//dispatch(fetchProducts()); dispatch a Thunk
// dispatch an action fetchProducts.pending, fetchProducts.fulfilled / fetchProducts.rejected