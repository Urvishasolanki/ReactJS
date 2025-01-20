import { useState } from "react"
import Login from "./login"
import Signup from "./signup"
import Swal from "sweetalert2"
function Logsign(){
    const [swic,setswic] = useState(true)
    const[dt,setdt] = useState({
        username : "",
        email : "",
        password : ""
    })
    const[arr,setarr] = useState([])
    function handlechange(e){
        setdt({...dt, [e.target.name] : e.target.value})
    }
    const  handlesubmit=(e)=>{
         e.preventDefault();
         setarr([...arr, dt])
         setdt({username : "",
          email : "",
          password : ""})
    }
  
    console.log(arr)
    
  return(
    <div>
        <button onClick={()=>setswic(false)}>Login</button>
        <button onClick={()=>setswic(true)}>Signup</button>
        {
        swic ? <Signup handlechange={handlechange} handlesubmit={handlesubmit}></Signup> : <Login arr={arr} data={dt}></Login>
        
    }
    </div>
   

  )
 
}
export default Logsign