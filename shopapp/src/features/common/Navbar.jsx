import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContextProvider';

export default function Navbar() {
  let {quantity} =  useContext(CartContext);
  return (
  <AppBar position="static">
  <Toolbar variant="dense">
    <Typography variant="h6" color="inherit" component="div">
      <Link to='/' style={{textDecoration:'none', color:'white', paddingRight:'10px'}}>
        Products
      </Link>
    <Link to='/cart' style={{textDecoration:'none', color:'white', paddingRight:'10px'}}>
        Cart &nbsp;&nbsp;
        <Badge badgeContent={quantity} />
      </Link>
       <Link to='/form' style={{textDecoration:'none', color:'white', paddingRight:'10px'}}>
        Form &nbsp;&nbsp;
      </Link>
       <Link to='/parent' style={{textDecoration:'none', color:'white', paddingRight:'10px'}}>
        Parent
      </Link>
    </Typography>
  </Toolbar>
</AppBar>
  )
}
