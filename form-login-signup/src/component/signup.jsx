import { useState } from "react"

function Signup({handlechange,handlesubmit}){


   
    return (
      <div>
        <form action="" onSubmit={handlesubmit}>
            <input type="text" name="username" placeholder="username" onChange={handlechange}/>
            <input type="text" name="email" placeholder="email" onChange={handlechange}/>
            <input type="text" name="password" placeholder="password" onChange={handlechange}/>
            <button type="submit">submit</button>
        </form>
      </div>
    )
}
export default Signup