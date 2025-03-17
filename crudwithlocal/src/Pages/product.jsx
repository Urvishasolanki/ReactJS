import { useState } from "react"
import { Link } from "react-router"

function Product(){
    
    const[state,setstate]=useState(JSON.parse(localStorage.getItem("data"))||[])
    console.log(state)
    let handleDel = (id)=>{
        let a=state.filter((el)=>{
         return el.id != id
       
        })
        setstate(a)
     }
    return(
        <div>
            {state.map((el)=>{
                return <>
                <img src={el.img} alt="" />
                <p>{el.title} - {el.des}</p>
                <button onClick={()=>handleDel(el.id)}>Delete</button>
                <Link to={`/editpage/${el.id}`}><button>Edit</button></Link><br />
                </>
            })
        }
           
        </div>
    )
}
export default Product