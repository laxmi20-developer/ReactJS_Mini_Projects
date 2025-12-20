import React from 'react'
import { Route, Routes } from 'react-router'
import Product from '../Product'
import Home from '../Home'

export default function Navigation() {
  return (
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/product" element={<Product/>}/>
    </Routes>
  )
}
