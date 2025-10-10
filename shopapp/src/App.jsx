import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './features/common/Navbar'
import { Routes, Route, Link } from 'react-router-dom'
import ProductList from './features/products/ProductList'
import Cart from './features/cart/Cart'
import Details from './features/products/Details'
import Default from './features/common/Default'

function App() {  
  return (
    <div className='container'>
      <Navbar />
      <Routes>
        <Route path='/products' element={<ProductList />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/detals/:id' element={<Details />}></Route>
        <Route path='/' element={<ProductList />}></Route> 
        <Route path='*' element={<Default />}></Route> 
      </Routes>
    </div>
  )
}

export default App
