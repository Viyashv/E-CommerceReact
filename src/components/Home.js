import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Carousel from './Carousel'


export default function Home() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
