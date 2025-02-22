import React,{useState,useEffect} from 'react'
import'./newcollection.css';
// import new_collections from'../../assets/new_collections';
import Item from '../item/Item';
const NewCollection = () => {
const[new_collection,setNew_collection]=useState([]);
  
useEffect(() => {
  fetch('http://localhost:4000/newcollections')
  .then((response)=>response.json())
  .then((data)=>setNew_collection(data));

}, [])


return (
    <div>
<div className="new-collection">
    <h1>New Collections</h1>
    <hr/>
    <div className="collections">
{new_collection.map((item,i)=>{
    return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
})}
    </div>
     </div>
    </div>
  )
}

export default NewCollection