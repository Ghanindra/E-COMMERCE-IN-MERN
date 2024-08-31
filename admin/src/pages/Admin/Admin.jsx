import React from 'react'
import './Admin.css'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import ListProduct from '../../components/listproduct/ListProduct.jsx'
import AddProduct from '../../components/Addproduct/AddProduct.jsx'
import {Routes,Route} from 'react-router-dom'
const Admin = () => {
  return (
    <div>
        <div className="admin">
         <Sidebar/>
         <Routes>
            <Route path='/addproduct' element={<AddProduct/>}/>
            <Route path='/listproduct' element={<ListProduct/>}/>
         </Routes>
        </div>
    </div>
  )
}

export default Admin