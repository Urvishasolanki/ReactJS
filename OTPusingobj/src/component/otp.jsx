import { useRef } from "react"

function Otp(){
   const otpRef  = useRef({
      otp1 :null,
      otp2 :null,
      otp3 : null,
      otp4 : null
   }) 
   const handlesubmit=(e)=>{
      e.preventDefault();
      console.log(otpRef.current.otp1.value)
      console.log(otpRef.current.otp2.value)
      console.log(otpRef.current.otp3.value)
      console.log(otpRef.current.otp4.value)
      
  }
  const handleInput = (e, nextRef,prevref) => {
       
   if (e.target.value.length === 1 && nextRef) {
       nextRef.current.focus();
   }
   else if(e.target.value.length === 0){
      prevref.current.focus()
   }
};
 return(
   <div>
      <form action="" onSubmit={handlesubmit}>
         
         <input type="text" ref={(el) => (otpRef.current.otp1 = el)} onChange={(e) => handleInput(e, otpRef.current.otp2, null)}/>
         <input type="text" ref={(el) => (otpRef.current.otp2 = el)} onChange={(e)=>handleInput(e, otpRef.current.otp3, otpRef.current.otp1)}/>
         <input type="text" ref={(el) => (otpRef.current.otp3 = el)}/>
         <input type="text" ref={(el) => (otpRef.current.otp4 = el)}/>
         <button type="submit">submit</button>
      </form>
   </div>
 )
}
export default Otp
