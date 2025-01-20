import { useState } from "react"

function Form({handlesubmit,handlechange,data}){
   
 return(
    <div>
       <form action="" onSubmit={handlesubmit}>
            <input type="text"  value={data.img} name = "img" placeholder="Enter img" onChange={handlechange}/>
            <input type="text"   value={data.title}  name = "title" placeholder="Enter title" onChange={handlechange}/>
            <input type="text"   value={data.price} name ="price" placeholder="Enter price" onChange={handlechange}/>
            <input type="text" value={data.des} name="des" placeholder="Enter description" onChange={handlechange}/>
            <button type="submit" onClick={handlesubmit}>submit</button>
        </form>
    </div>
 )
}
export default Form