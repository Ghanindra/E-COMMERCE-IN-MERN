import React from 'react'
import'./relativeproducts.css';
import Item from '../item/Item';
import data_product from '../../assets/data.js'
const RelativeProducts = () => {
  return (
    <div>
        <div className="relativeproducts">
           <h1> Related products</h1>
           <hr/>
           <div className="relatedproduct-items">
{ data_product.map((item,i)=>{
    return<Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
})}
           </div>
        </div>
    </div>
  )
}

export default RelativeProducts