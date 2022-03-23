import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";



export const SingleProductList = () => {

   const {id} = useParams()
   const [data, setData] = useState([])
   useEffect(()=>{
 
     axios(`https://movie-fake-server.herokuapp.com/products/${id}`)
     .then((res)=>setData(res.data))
 
   },[])

  
  return <div>
  
    
   <h2>Title: {data.title}</h2>
   <h3>Brand: {data.brand}</h3>
   <img src={data.image} alt="" />
   <p>Price: {data.price} /- Rs</p>
   <p>Category: {data.category}</p>
  </div>;
};
