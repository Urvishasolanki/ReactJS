import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Operations from './components/Operations'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Operations></Operations>
    </>
  )
}

export default App
