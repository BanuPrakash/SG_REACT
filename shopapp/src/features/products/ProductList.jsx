import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ProductCard from './ProductCard';

export default function ProductList() {
  let [products, setProducts] = useState();

  // componentDidMount
   useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
    .then(res => res.json())
    .then(data => setProducts(data))
   }, [])

  return (
    <div className='row'>
      {
        products && products.map(product => <ProductCard key={product.id} product={product} />)
      }
    </div>
  )
}
