import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import type Product from '../../models/Product';


type AppProps = {
  product: Product
}

export default function ProductCard({product}: AppProps) {
 
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
        <Button size="small">Add To Cart</Button>
    
      </CardActions>
    </Card>

    </div>
  )
}
