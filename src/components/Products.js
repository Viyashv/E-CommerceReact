import { useEffect } from 'react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FilterdProduct from './FilterdProduct'

// const products = [{name: 'Product 1', price: 100}, {name: 'Product 2', price: 200}, {name: 'Product 3', price: 300}, {name: 'Product 4', price: 400}, {name: 'Product 5', price: 500}]
export default function Products() {
    const [products , setProducts]= useState(null)
    async function fetchProducts() {
        let response = await fetch('https://dummyjson.com/products' ,{ method: 'GET'})
        let data = await response.json()
        setProducts(data.products)
    }
    useEffect(() => {
        fetchProducts()
    },[])
    function filterProductsByCategory(category_name) {
        let filtredProductBasedOnCategory = products.filter(product => {return product.category.toLowerCase().includes(category_name.toLowerCase())})
        setProducts(filtredProductBasedOnCategory)
    }

  return (
    <div className='container'>
        <h1 className='text-center'>Products</h1>
        <div className='row'>
            <FilterdProduct onFilterProductsByCategory = {filterProductsByCategory}/>
            {
                products && products.map((product,index) => {
                    return (
                        <div className='col-md-3 mt-3' key={index}>
                            <div className="card">
                                <img src={product.thumbnail} className="card-img-top" alt="..." loading='lazy'/>
                                <div className="card-body">
                                    <h5 className="card-title">{product.title.slice(0,15)}</h5>
                                    <p className="card-text">{product.description.slice(0,95)}...</p>
                                    <p className="card-text">{product.category}</p>
                                    <p className="card-text">Price :- &#8377;{product.price}</p>
                                    <Link to={`/product/${product.id}`} className="btn btn-primary">View more</Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
      
    </div>
  )
}
