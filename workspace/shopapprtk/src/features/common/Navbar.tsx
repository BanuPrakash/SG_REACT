import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';

import { useSelector } from 'react-redux';
import { useAppSelector } from '../../redux/store';


export default function Navbar() {
  // let {quantity} = useSelector(state => state.cart);
  let {quantity} = useAppSelector(state => state.cart)
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
        Parent &nbsp;&nbsp;
      </Link>
        <Link to='/slow' style={{textDecoration:'none', color:'white', paddingRight:'10px'}}>
        Slow &nbsp;&nbsp;
      </Link>
       <Link to='/customers' style={{textDecoration:'none', color:'white', paddingRight:'10px'}}>
        Customer &nbsp;&nbsp;
      </Link>
    </Typography>
  </Toolbar>
</AppBar>
  )
}
