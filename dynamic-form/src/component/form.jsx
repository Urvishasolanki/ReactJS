import { useState } from "react"
import './form.css'

function Di(){
    const[formData,setformData] = useState({
        name : "",
        class : "",
        email : "",
        skills : [{skils : ""}]

    })
    const handleadd=()=>{
        setformData({
          ...formData,
          skills :[...formData.skills,{skills : ""}]
        })
    }
    const handlechange=(e)=>{
        const {name,value} = e.target
        if(isNaN(name)){
       
        setformData({...formData,[name]:value})
        }
        else{
            const arr = [...formData.skills]
            arr[name] = value
            setformData({...formData,skills:arr})
        }

    }
    console.log(formData)
    
    const handlesubmit=()=>{
        e.preventDefault()
        
    }

    
    return (
    <div>
        <div className="main"> 
        <form action="" onSubmit={handlesubmit}>
            <input type="submit" value="Submit"/>
            <input type="text" name="name" placeholder="Enter name"  onChange={handlechange}/>
            <input type="text" name="class" placeholder="Enter class" onChange={handlechange}/>
            <input type="text" name = "email" placeholder="Enter Email" onChange={handlechange}/>
            {
                formData.skills.map((el,index)=> (
                    <input type="text" name={index} placeholder="Enter skils"  onChange={handlechange}/>
                ))
            }
           
        <input type="button"  value="add" onClick={handleadd}/> 
        </form>
        </div>
    </div>
    )
}
export default Di