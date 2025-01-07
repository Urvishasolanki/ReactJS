import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // let counter = 15
  let [counter,setCounter] = useState(15)
  const addvalue = () => {
    if(counter >= 20){
      return
    }
   setCounter(counter+1)
   
  }
  const removevalue = () => {
    console.log("remove value",counter)
    if(counter <= 0){
      return
    }
    setCounter(counter-1)
  }
  return (
    
    <>
      <h2>counter value : {counter}</h2>
      <button onClick={addvalue}>Add value{counter}</button>
      <br/>
      <button onClick={removevalue}>Remove value : {counter}</button>
      <footer> counter : {counter} </footer>
    </>
  )
}

export default App
