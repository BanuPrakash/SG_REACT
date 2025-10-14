import React from 'react'
import { useContext } from 'react'
import Button from '@mui/material/Button';
import CartRow from './CartRow'

export default function Cart() {

  return (

    <div className='container'>
      
      <div className='row'>
        <div className='col-md-10'>&nbsp;</div>
        <div className='col-md-2'>Total {0}</div>
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
