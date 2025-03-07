import React from 'react'
import { Link } from 'react-router-dom'

const products = [{name: 'Product 1', price: 100}, {name: 'Product 2', price: 200}, {name: 'Product 3', price: 300}, {name: 'Product 4', price: 400}, {name: 'Product 5', price: 500}]
export default function Products() {
  return (
    <div className='container'>
        <h1 className='text-center'>Products</h1>
        <div className='row'>
            {
                products.map((product,index) => {
                    return (
                        <div className='col-md-3'>
                            <h2>{product.name}</h2>
                            <p>Price: {product.price}</p>
                            <Link to={`/product/${index}`} className='btn btn-primary'>View</Link>
                        </div>
                    )
                })
            }
        </div>
      
    </div>
  )
}
