import React, {useEffect, useState } from 'react'
import axios from 'axios'





export default function Read() {
    const [data, setdata] = useState([])
   
        useEffect(() => {
            axios.get("http://localhost:3000/blog")
        .then((res) => {
            setdata(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
        

          },[])





          const deleteData = (id) => {
            axios
              .delete(`http://localhost:3000/blog/${id}`)
              .then(() => {
                setdata(data.filter((item) => item.id !== id));
              })
              .catch((err) => {
                console.log(err);
              });
        
        
    return (
     data.map((res)=>{
         return <>
          <h5>{res.title}</h5>
          <h5>{res.url}</h5>
          <p>{res.Description}</p>
          <button onClick={deleteData()}>delete</button>
          <button>update</button>
          </>
           
       })
    )
}
