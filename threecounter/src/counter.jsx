import { useState } from "react"
import Counter2  from "./counter2"  
import Counter3  from "./counter3"  

function Counter(){
  let [counter,setCounter] = useState(15)
  const addvalue = () => {
   setCounter(counter+1)
   
  }
  const removevalue = () => {
    if(counter <= 0){
      return
    }
    setCounter(counter-1)
  }



    return (
    <>
      <div className="maincard">
      <Counter2 urvi={counter}/>
      <div className="card">
      <button onClick={addvalue}>+</button>
      <h1>{counter}</h1>
      <button onClick={removevalue}>-</button>
      </div>
      <Counter3 urvi={counter} />
      </div>
    </>
    )
}
export default Counter