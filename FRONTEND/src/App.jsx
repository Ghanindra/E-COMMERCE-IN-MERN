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
import men_banner from './assets/banner_mens.png';
import women_banner from './assets/banner_women.png';
import kid_banner from './assets/banner_kids.png';
const App = () => {
  return (
    <div>
      <BrowserRouter>
    
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category='men'/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category='women'/>}/>
        <Route path='/Kids' element={<ShopCategory banner={kid_banner}category='kid'/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
          </Route>

      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSigup/>}/>
 
      </Routes>

      <Footer/>
      </BrowserRouter>
  
    </div>
  )
}

export default App