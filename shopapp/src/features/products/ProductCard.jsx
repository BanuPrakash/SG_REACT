import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react'
import { CartContext } from '../../context/CartContextProvider';

import { Link } from 'react-router-dom';

export default function ProductCard({product}) {
  // Consumer
  let {addToCart} = React.useContext(CartContext );

  let {id, title, price, description, image} = product;

  return (
    <div className='col-md-4 col-xl-3 my-2'>

     <Card sx={{ maxWidth: 345 }}>
      <Link as={Link} to={`/details/${id}`} >
        <CardMedia
          sx={{ height: 300 }}
          image={image}
          title="green iguana"
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
          <br />
          Rs. {price}
        </Typography>

      </CardContent>
      
      <CardActions>
        <Button size="small" onClick={() => addToCart({
          ...product,
          qty: 1,
          amount: price
        })}>Add To Cart</Button>
    
      </CardActions>
    </Card>

    </div>
  )
}
