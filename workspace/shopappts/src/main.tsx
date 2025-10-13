import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'  
import CartContextProvider from './context/CartContextProvider.js'

createRoot(document.getElementById('root') as HTMLDivElement).render(
<BrowserRouter>
 <CartContextProvider>
    <App />
 </CartContextProvider>

</BrowserRouter>)
