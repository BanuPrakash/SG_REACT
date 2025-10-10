import React from 'react'
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
  <AppBar position="static">
  <Toolbar variant="dense">
    <Typography variant="h6" color="inherit" component="div">
      <Link to='/' style={{textDecoration:'none', color:'white', paddingRight:'10px'}}>
        Products
      </Link>
    <Link to='/cart' style={{textDecoration:'none', color:'white', paddingRight:'10px'}}>
        Cart
      </Link>
    </Typography>
  </Toolbar>
</AppBar>
  )
}
