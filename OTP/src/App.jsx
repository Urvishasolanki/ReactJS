import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Otp from './component/otp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Otp></Otp>
    </>
  )
}

export default App
