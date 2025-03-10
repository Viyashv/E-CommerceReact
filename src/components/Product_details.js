import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

export default function Product_details() {
  const [product, getProduct] = useState(null)
  const id = useParams().id
  async function fectProductById() {
    let response = await fetch(`https://dummyjson.com/products/${id}`, { method: 'GET' })
    let data = await response.json()
    getProduct(data)
  }
  useEffect(() => {
    fectProductById()
  }, [])
  return (

    <div className='container'>
      <h1 className='text-center'>
        This is the Product details page for product {useParams().id}
        {useParams().name}
        <p>Price: {useParams().price}</p>
      </h1>
      <div className='row'>
        {
          product &&
          <div className='col-md-3 mt-3'>
            <div className="card">
              <img src={product.thumbnail} className="card-img-top" alt="..." loading='lazy' />
              <div className="card-body">
                <h5 className="card-title">Name:- {product.title.slice(0,15)}</h5>
                <p className="card-text">Description:- {product.description.slice(0,95)}...</p>
                <p className="card-text">Price :- <del>&#8377;{product.price}</del>&#8377;{product.discountPercentage}</p>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}
