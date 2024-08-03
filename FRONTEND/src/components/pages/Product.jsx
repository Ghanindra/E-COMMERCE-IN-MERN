import React,{useContext} from 'react'
import {ShopContext} from '../context/ShopContext'
import Breadcrum from'../../components/Breadcrums/Breadcrum';
import{useParams} from 'react-router-dom';
import Productdisplay from'../../components/productdisplay/Productdisplay';
import RelativeProducts from'../../components/relativeproduct/RelativeProducts';
import DescriptionBox from'../../components/descriptionbox/DescriptionBox';
const Product = () => {
  const{all_product}=useContext(ShopContext)
  const {productId}=useParams();
  const product = all_product.find((e)=>e.id === Number(productId));
 
  
  return (
    <div>
      <Breadcrum product={product}/>
      <Productdisplay product={product}/>
      <DescriptionBox/>
      <RelativeProducts/>

    </div>
     
  )
}

export default Product