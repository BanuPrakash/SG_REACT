
import React from 'react'
import cartReducer from '../reducers/cartReducer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// central place to manage cart state
export const CartContext = React.createContext();

const initialState = {
    cartItems: [],
    total: 0,
    quantity: 0
}

export default function CartContextProvider({children}) {
  let navigate = useNavigate();
 let [state, dispatch] = React.useReducer(cartReducer, initialState);

  function addToCart(item) {
    dispatch({
        type: 'ADD_TO_CART',
        payload: item
    })  
  };

  function increment(id) {
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
