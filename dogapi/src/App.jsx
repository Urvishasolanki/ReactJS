import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dogapi from './component/dogapi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Dogapi></Dogapi>
    </>
  )
}

export default App
