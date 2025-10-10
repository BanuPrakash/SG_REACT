
import React from 'react'
import cartReducer from '../reducers/cartReducer';

// central place to manage cart state
export const CartContext = React.createContext();

const initialState = {
    cartItems: [],
    total: 0,
    quantity: 0
}

export default function CartContextProvider({children}) {
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
    dispatch({
        type: 'CLEAR_CART'
    })  
  };

  return (
    <CartContext.Provider value={{...state, addToCart, increment, clearCart}}>
        {children}
    </CartContext.Provider>
  )
}
