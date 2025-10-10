import Button from '@mui/material/Button';
import React from 'react'

export default function CartRow({product}) {
  let {id, title, image, price, qty, amount} = product;
  return (
    <div className='row'>
      <div className='col-md-2'>
        <img src={image} alt={title} height="50px" />
      </div>
      <div className='col-md-2'>{title}</div>
      <div className='col-md-4'>
        <Button variant='contained'>-</Button>
        &nbsp; {qty} &nbsp; 
        <Button variant='contained'>+</Button>
      </div>
      <div className='col-md-2'>
       Price {price}
      </div>
      <div className='col-md-2'>
        Amount {amount}
      </div>
    </div>
  )
}
