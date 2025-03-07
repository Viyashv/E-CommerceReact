import React from 'react'
import { Link } from 'react-router-dom'

export default function Errorpage() {
  return (
    <div className="container">
      404 Page not found
      <br/>
      Back to <Link to="/">Home</Link>
    </div>
  )
}
