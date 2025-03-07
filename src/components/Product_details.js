import React from 'react'
import { useParams } from 'react-router-dom'

export default function Product_details() {
  return (
    <div className='container'>
      <h1 className='text-center'>
        This is the Product details page for product {useParams().id}
                            <h2>{useParams().name}</h2>
                            <p>Price: {useParams().price}</p>
      </h1> 
    </div>
  )
}
