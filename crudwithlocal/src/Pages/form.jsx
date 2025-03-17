import { useEffect, useState } from "react"
import { v4 } from "uuid"

function From(){
    const [state,setstate] = useState({
        title : "",
        des : "",
        img : "",
        id : v4()
    })
    const [arr,setarr] = useState(JSON.parse(localStorage.getItem("data"))||[])
    useEffect(()=>{
        localStorage.setItem("data",JSON.stringify(arr))
    },[arr])
    
    const handlechange = (e)=>{
       const{name,value}=e.target
       setstate({...state,[name]:value})
    }
    const handlesubmit =(e)=>{
       e.preventDefault()
       setarr([...arr,state])
       setstate({
        title : "",
        des : "",
        img : "",
        id : v4()
       })
      
}

    console.log(arr)
    return(
        <div>
            <form action="" onSubmit={handlesubmit}>
                <input type="text" value={state.title} name="title" placeholder="title" onChange={handlechange}/><br></br>
                <input type="text" value={state.des} name="des" placeholder="description" onChange={handlechange}/><br></br>
                <input type="text" value={state.img} name="img" placeholder="img" onChange={handlechange}/><br></br>
                <input type="submit" />
               
            </form>
        </div>
    )
}
export default From