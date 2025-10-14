import { createSlice } from '@reduxjs/toolkit'
import type CartItem from '../../models/CartItem';

type CartType = {
    cartItems: CartItem[],
    total: number,
    quantity: number
};

const initialState: CartType = {
    cartItems: [],
    total: 0,
    quantity: 0
} 

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addToCart: (state, action) => {
        state.cartItems.push({...action.payload});
        state.total += action.payload.amount;
        state.quantity++;
    },
    increment: (state, action) => {
        let item = state.cartItems.find(product => product.id === action.payload);
        if(item?.qty) {
            item.qty++;
        } 
        state.total = state.cartItems.map(item => item.amount).reduce((v1, v2) => v1 + v2, 0.0);
    },
    clearCart: (state) => {
        state.cartItems = [];
        state.total = 0;
        state.quantity = 0;
    }
  },
})

export const {addToCart, clearCart, increment} = cartSlice.actions

export default cartSlice.reducer