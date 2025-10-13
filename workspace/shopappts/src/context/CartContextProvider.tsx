
import React from 'react'

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import type CartItem from '../models/CartItem';
import cartReducer from '../reducers/cartReducer';

type CartContextType = {
  cartItems: CartItem[],
  total: number,
  quantity: number,
  addToCart: (cartItem: CartItem) => void,
  increment: (no: number) =>  void,
  clearCart: () => void
}
// central place to manage cart state
export const CartContext = React.createContext<CartContextType>({
  cartItems: [],
  total: 0,
  quantity: 0,
  addToCart: (item:CartItem) => {},
  increment:(no:number) => {},
  clearCart: () => {}
});

export type CartReducerType = {
   cartItems: CartItem[],
    total: number,
    quantity: number
}
const initialState:CartReducerType = {
    cartItems: [],
    total: 0,
    quantity: 0
}

type AppProps = {
  children : React.ReactNode
}

export default function CartContextProvider({children}:AppProps) {
  let navigate = useNavigate();
 let [state, dispatch] = React.useReducer(cartReducer, initialState);

  function addToCart(item: CartItem) {
    dispatch({
        type: 'ADD_TO_CART',
        payload: item
    })  
  };

  function increment(id: number) {
    dispatch({
        type: 'INCREMENT',
        payload: id
    })  
  };

 function clearCart() {
  //window.sessionStorage.setItem("email", "banu@gmail.com")
    let order  = {
      customer: {"email": window.sessionStorage.getItem('email')},
      date: new Date(),
     items: state.cartItems,
     total: state.total
    }

    // @ts-ignore
    axios.post("http://localhost:1234/orders", order).then(res => {
       dispatch({
        type: 'CLEAR_CART'
      }) ;
      navigate('/');
    });

    
  };

  return (
    <CartContext.Provider value={{...state, addToCart, increment, clearCart}}>
        {children}
    </CartContext.Provider>
  )
}
