import React, { useEffect } from 'react'
import { useState } from "react";
import Card from '../components/Card';


import axios from "axios";

const Home = (props) => {
console.log(props)
  const [data, setData] = useState([])

 useEffect(()=>{
  axios.get(`https://fakestoreapi.com/products`)
  .then(res=>res.data)
  .then(res=>setData(res))
 },[])

  return (
    <div className='home'>
      <div className='container'>
        <div className='cards'>

          {
            data.map(item=>(

            <Card key = {item.id}  data = {item}/>
            ))
          }
          

        </div>
    </div>
    </div>
  )
}

export default Home