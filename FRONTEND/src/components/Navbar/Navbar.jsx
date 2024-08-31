import React,{useState,useContext,useRef} from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import { IoMdMenu } from "react-icons/io";
import {Link} from'react-router-dom';
import {ShopContext} from '../context/ShopContext'
const Navbar = () => {
    const[menu,setMenu]=useState("shop")
    const{getTotalCartItems}=useContext(ShopContext);
   const menuRef=useRef();

   const dropdown_toggle=()=>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open')
}
    return (
    <div>
        <div className="navbar">
<div className="nav-logo">
    <img src={logo} alt=""/>
    <p>SHOOPING</p>
</div>

<ul ref={menuRef} className="nav-menu">
    <li  onClick={()=>{setMenu('shop')}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu('mens')}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==='mens'?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu('womens')}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==='womens'?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu('kids')}}><Link style={{textDecoration:'none'}} to="Kids">kids</Link>{menu==='kids'?<hr/>:<></>}</li>
</ul>
<div className="nav-login-cart">
    {localStorage.getItem('auth-token')
    ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
:<Link to="/login"> <button>Login</button></Link>}
   
   <Link to='/cart'> <img src={cart_icon}alt=""/></Link>
    <div className="nav-cart-count">
        {getTotalCartItems()}
    </div>
</div>

<span className="toggle" onClick={dropdown_toggle}><IoMdMenu /></span>
        </div>
   
    </div>
  )
}

export default Navbar