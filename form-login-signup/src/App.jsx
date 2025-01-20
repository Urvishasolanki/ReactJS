import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logsign from './component/login-signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Logsign></Logsign>
    </>
  )
}

export default App
