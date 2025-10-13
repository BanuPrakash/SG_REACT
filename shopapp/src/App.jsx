import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './features/common/Navbar'
import { Routes, Route, Link } from 'react-router-dom'
import ProductList from './features/products/ProductList'

import Default from './features/common/Default'
import { lazy } from 'react'
import { Suspense } from 'react'
import ProductForm from './features/products/ProductForm'
import ParentComponent from './trials/ParentComponent'
import SlowApp from './fiber/SlowApp'

// lazy loading
const Cart = lazy (() => import('./features/cart/Cart'));
const Details = lazy(() => import('./features/products/Details'));


function App() {  
  return (
    <div className='container'>
      <Navbar />
      <Routes>
        <Route path='/products' element={<ProductList />}></Route>
        <Route path='/cart' element={
          <Suspense fallback={<div>Loading Cart...</div>}>
            <Cart />
          </Suspense>
        }></Route>
        <Route path='/details/:id' element={
           <Suspense fallback={<div>Loading Details...</div>}>
            <Details />
           </Suspense>
         }></Route>
          <Route path='/form' element={<ProductForm />}></Route> 
           <Route path='/parent' element={<ParentComponent />}></Route> 
           <Route path='/slow' element={<SlowApp />}></Route> 
        <Route path='/' element={<ProductList />}></Route> 
        <Route path='*' element={<Default />}></Route> 
      </Routes>
    </div>
  )
}

export default App
