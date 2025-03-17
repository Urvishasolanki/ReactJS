import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Searching from './Component/Searching'
import Filteing from './Component/Filteing'
import Sorting from './Component/Sorting'
import { BrowserRouter } from 'react-router'
import Mainrouts from './Routes/Mainrouts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
       <Mainrouts></Mainrouts>
      </BrowserRouter>
    </>
  )
}

export default App
