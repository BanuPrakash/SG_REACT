import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

import type Product from '../../models/Product';
import ProductCard from './ProductCard';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import fetchProducts from '../../redux/api/productsApi';

export default function ProductList() {
  let dispatch = useAppDispatch();
  let {data: products, error, status} = useAppSelector(state => state.products);
  // let [products, setProducts] = useState<Product[]>([]);

  // // componentDidMount
  //  useEffect(() => {
  //   fetch('https://fakestoreapi.com/products?limit=5')
  //   .then(res => res.json())
  //   .then(data => setProducts(data))
  //  }, [])
  useEffect(() => {
    dispatch(fetchProducts()); // dispatch Thunk
  }, []);

  return (
    <div className='row'>
      {
        (status == "loading")? <div> Loading Products!!!</div> : products && products.map(product => <ProductCard key={product.id}  product={product} />)
      }
    </div>
  )
}
