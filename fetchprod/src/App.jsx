import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './components/product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Products></Products>
    </>
  )
}

export default App
 