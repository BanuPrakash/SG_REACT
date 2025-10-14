import React from 'react'
import { useContext } from 'react'
import Button from '@mui/material/Button';
import CartRow from './CartRow'
import { useSelector } from 'react-redux';

export default function Cart() {
  let {cartItems, total} = useSelector(state => state.cart);
  return (

    <div className='container'>
      {
        cartItems.map(item => <CartRow product={item} key={item.id} />)
      }
      <div className='row'>
        <div className='col-md-10'>&nbsp;</div>
        <div className='col-md-2'>Total {total}</div>
      </div>
        <div className='row'>
        <div className='col-md-10'>&nbsp;</div>
        <div className='col-md-2'>
          <Button variant='contained'>Checkout</Button>
        </div>
      </div>
      
    </div>
  )
}
