import Products from "./products"
import Form from "./form"
import { useState } from "react"
import './products.css'
function Navbar(){
    const [state,setstate]=useState(true)
    const[data,setdata] = useState({
        img : "",
        title : "",
        price : "",
        des : "",
    })
    const handlechange = (e)=>{
        
            setdata({...data, [e.target.name] : e.target.value})
        
    }
    const[arr,setarr] = useState([])
    
    const handlesubmit = (e) => {
        e.preventDefault();
        setarr([...arr, data]);
        setdata({ img: "", title: "", price: "", des: "" });
    }
    console.log(arr)
   
    return (
     <div>
        <button onClick={()=>setstate(true)}>data to insert</button>
        <button onClick={()=>setstate(false)}>products</button>
        {state==true?<Form handlesubmit={handlesubmit} handlechange={handlechange} data={data}></Form>:<Products arr={arr}></Products>}
     </div>
    )
    
}
export default Navbar