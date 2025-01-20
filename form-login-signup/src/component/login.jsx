import { useState } from "react";
import Swal from "sweetalert2";

function Login(props){
    console.log(props.arr);
    const[email,setemail] = useState()
    const[password,setpassword] = useState()

    function cmp(e){
        e.preventDefault()
    let data = props.arr.filter((el)=> {
        return (el.email == email)
    })

    // console.log(user)

    if(data.length>0){
        let user = data.filter((el)=> {
            return (el.password == password)
        })

        if(user.length>0){
            alert("login successful")
        }
        else{
            alert("Incorrect password")
        }
    }
    else{
        alert("email not exist")
    }
}
   
 return (
    <div>
        
        <form action="" onSubmit={cmp}>
            <input type="text" placeholder="email" onChange={(e)=>setemail(e.target.value)}/>
            <input type="text" placeholder="password" onChange={(e)=>setpassword(e.target.value)}/>
            <button type="submit">submit</button>
        </form>
    </div>
 )

}
export default Login