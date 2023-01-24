import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
const Checkout = () => {
     const [list, setlist] = useState()
     const { id } = useParams();
     const data = useSelector((state) => state.CartReducer.carts);
 
   let cart=[];

     const get_check=(x,y)=>{
  
          const filtercheck=y.filter((item)=>item.id===x)

          cart.push(filtercheck)
          console.log(x,y)
      }
      console.log(cart)
      useEffect(()=>{
          get_check(id,data)
        },[id,data]);
  return (
    <div>
{cart && cart.map((item)=>{
  return <div>{item.title}</div>
})}    
    </div>
  )
}

export default Checkout
