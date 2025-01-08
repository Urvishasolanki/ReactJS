import { useState } from "react"
import { useEffect } from "react"
import './dogapi.css'

function Dogapi(){
    const [data,setData] = useState(false)
    const [resdata,setresdata] = useState([])
    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((res)=>res.json())
        .then((res)=>{
            setresdata(res.message)
        })
        .catch((err)=>{
            console.log(err)
        })
},[data])

  
return (
    <div className="main">
        <button onClick={()=>setData(!data)}>click</button>
        
        {
            <div className="imgs">
                <img src={resdata} alt="" />
            </div>
                }

    </div>
)
}
export default Dogapi