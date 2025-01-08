import { use, useEffect } from "react"
import { useState } from "react"
import './product.css'

function Products(){
    const [state,setstate] = useState()
    const [prodData,setprodData] = useState([])
    const [refresh,setref] = useState(false)
    useEffect(()=>{
            fetch('https://dummyjson.com/products')
            .then((res)=>res.json())
            .then((res)=>{
                setprodData(res.products)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])
   
      return (
        <div className="main">
            <h1>{state}</h1>

         
           
            
            {
               prodData?prodData.map((el)=>{
                return (
                    
                    <div className="card">
                       <div className="imgs">
                       <img src={el.thumbnail} alt={el.title} />
                       </div>
                       <div className="des">
                        <h2>title:{el.title}</h2>
                        <h3>Price:{el.price}</h3>
                        <h3>Description:{el.description}</h3>
                        </div>
                    </div>
                )
            }): <h1>Loading......</h1>
            }
            {/* <button onClick={()=>{setstate(state + 1)}}>add</button>
            <button onClick={()=>{setref(!refresh)}}>refresh</button> */}
        </div>
      )
}
export default Products