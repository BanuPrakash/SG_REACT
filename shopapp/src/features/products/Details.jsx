import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Details() {
  let [product, setProduct] = React.useState(null);

  let {id} = useParams(); // /details/:id PathVariable
   // useSearchParams()  // ?key=value&key2=value2 
   
   // componentDidUpdate
   useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(data => setProduct(data))
   }, [id])

  return (
    <div>
      <h1>Details of {id}</h1>
      {
        product && <div>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} height={300} />
          <h3>Rs. {product.price}</h3>
          <p>{product.description}</p>
        </div>
      }
    </div>
  )
}
