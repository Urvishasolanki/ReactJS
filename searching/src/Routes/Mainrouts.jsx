import React from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import Home from '../Component/Home'
import Filteing from '../Component/Filteing'
import Searching from '../Component/Searching'
import Sorting from '../Component/Sorting'

export default function Mainrouts() {
  return (
    <div>
        <Routes>
           <Route path="/" element={<Home/>}></Route>
           <Route path="/filtering" element={<Filteing/>}></Route>
          <Route  path='/searching' element={<Searching/>}></Route>
          <Route path='/sorting' element={<Sorting/>}></Route>
        </Routes>
       
    </div>
  )
}
