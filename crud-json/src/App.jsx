import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navbar'
import Mainrouts from './router/mainrouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <Navbar></Navbar>
          <Mainrouts></Mainrouts>
    </>
  )
}

export default App
