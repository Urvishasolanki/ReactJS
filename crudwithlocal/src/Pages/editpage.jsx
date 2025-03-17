import { useState } from "react"
import {useParams} from "react-router"
import { useEffect } from "react"
import { useNavigate } from "react-router"

function Editpage(){
    const [data,setData] = useState(JSON.parse(localStorage.getItem("data"))||[])
    const [state,setState] = useState({
        title : "",
        des : "",
        img : "",
        id : ""
    })
    const navigate = useNavigate()
    useEffect(()=>{
        let a = data.filter((el)=>{
           return el.id == dat.id
        })
        setState(a[0])
      },[])
      useEffect(()=>{
        localStorage.setItem("data",JSON.stringify(data))
      },[data])
   
    const dat = useParams()
  
    const handleChange = (e)=>{
        const {name,value} = e.target
        setState({...state,[name] : value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        let a = data.map((el)=>{
            if(el.id == dat.id){
                 return state
            }else{
                return el;
            }
        })
        setData(a)

        navigate("/product")
    }


 return(
    <div>
        <h1>Editpage</h1>
        <form action="" onSubmit={handleSubmit} >
             <input type="text" value={state.title} placeholder='Title' name='title' onChange={handleChange} />
             <input type="text" value={state.des} placeholder='Description' name='des' onChange={handleChange} />
             <input type="text" value={state.img} placeholder='Image URL' name='img' onChange={handleChange} />
             <input type="submit" value={"Edit"} />
        </form>
    </div>
 )
}
export default Editpage