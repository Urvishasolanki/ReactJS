import React from 'react'
import { Link } from 'react-router'
export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to={'/searching'}><button>searching</button></Link>
      <Link to={'/filtering'}><button>filtering</button></Link>
      <Link to={'/sorting'}> <button>sorting</button></Link>
     
    </div>
  )
}
