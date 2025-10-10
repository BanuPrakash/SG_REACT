import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContextProvider';
import Button from '@mui/material/Button';
import CartRow from './CartRow'

export default function Cart() {
  let {cartItems, total, clearCart} = useContext(CartContext);
  return (

    <div className='container'>
      {
        cartItems.map(product => <CartRow key={product.id} product={product}/>)
      }
      <div className='row'>
        <div className='col-md-10'>&nbsp;</div>
        <div className='col-md-2'>Total {total}</div>
      </div>
        <div className='row'>
        <div className='col-md-10'>&nbsp;</div>
        <div className='col-md-2'>
          <Button variant='contained' onClick={() => clearCart()}>Checkout</Button>
        </div>
      </div>
      
    </div>
  )
}
