import React from 'react'

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './components/pages/Shop';
import Product from './components/pages/Product';
import Cart from './components/pages/Cart';
import LoginSigup from './components/pages/LoginSigup';
import Footer from'./components/footer/Footer';
import ShopCategory from './components/pages/ShopCategory';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
const App = () => {
  return (
    <div>
      <BrowserRouter>
    
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory category='men'/>}/>
        <Route path='/womens' element={<ShopCategory category='women'/>}/>
        <Route path='/Kids' element={<ShopCategory category='kid'/>}/>
      <Route path='Product' element={<Product/>}/>
      <Route path=':ProductId' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSigup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App