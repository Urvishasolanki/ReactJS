import { useState } from "react"
import './login-signup.css'

function Loginsignup(){
    const [state, setstate] = useState(true)
    const [username,setUsername] = useState("")
    const [Email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [loginEmail,setloginEmail] = useState("")
    const [loginPassword,setloginpassword] = useState("")
    const [arr,setArray] = useState([])
    const submithandle = () =>{

      let obj = {
        username,
        Email,
        password
      }
      setArray([...arr,obj])
          setEmail("")
          setPassword("")
          setUsername("")

    }
    console.log(arr)
    const logincheck = ()=>{
      const a = arr.filter((el) => {
        if(el.Email != loginEmail){
          Swal.fire({
            title: "try again!",
            text: "Email incorrect!",
            icon: "error"
          });
        }
        else if(el.password != loginPassword){
          Swal.fire({
            title: "try again!",
            text: "password incorrect!",
            icon: "error"
          });
        }
      
        else{
          Swal.fire({
            title: "Good job!",
            text: "login successful!",
            icon: "success"
          });
        }
      })
      // console.log(a)
     
    }
    
 
   
  return(
   <div className="main">
      {state ?
    <div className="signup">
    <h1>Sign-up</h1>
    <input type="text" placeholder="Enter Emailid" value={Email} onChange={(el)=>{setEmail(el.target.value)}}/>
    <input type="text" placeholder="Enter username" value={username} onChange={(el)=>{setUsername(el.target.value)}}/>
    <input type="text" placeholder="Enter password" value={password} onChange={(el)=>{setPassword(el.target.value)}} /><br />
    <input type="submit" id="signbtn" onClick={submithandle} value="submit"/>
    <p onClick={()=>{setstate(false)}}>New in website</p>
    </div> 
     :<div className="login">
    <h1>Login</h1>
    <input type="text" value={loginEmail} placeholder="Enter Email"  onChange={(el)=>{setloginEmail(el.target.value)}}/>
    <input type="text"  value={loginPassword} placeholder="Enter password" onChange={(el)=>{setloginpassword(el.target.value)}}/><br />
    <input type="submit"id="loginbtn" onClick={logincheck} value="submit"/>
    <p onClick={()=>{setstate(true)}}>Already have an account</p>
    </div>
}
    </div>)}
    

  

  

export default Loginsignup