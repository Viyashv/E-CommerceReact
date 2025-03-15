import { useEffect } from 'react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FilterdProduct from './FilterdProduct'
import SortProducts from './SortProducts'
import Navbar from './Navbar'


export default function Products() {
    let [products , setProducts]= useState(null)
    let [filtredProduct , getProductsProducts]= useState(null)
    async function fetchProducts() {
        let response = await fetch('https://dummyjson.com/products' ,{ method: 'GET'})
        let data = await response.json()
        setProducts(data.products)
        getProductsProducts(data.products)
    }
    useEffect(() => {
        fetchProducts()
    },[])

    function filterProductsByCategory(category_name) {
        let filtredProductBasedOnCategory = products.filter(product => product.category.toLowerCase().includes(category_name.toLowerCase()))
        getProductsProducts(filtredProductBasedOnCategory)
    }
    
    function sortProductsByPrices(SortingType)
    {let data = [...filtredProduct]
        if (SortingType === "asc"){data.sort((a,b) => a.price - b.price)}
        else{data.sort((a,b) => b.price - a.price)}
        getProductsProducts(data)
    }

  return (
<div>
    <div className='container'>
        <h1 className='text-center'>Products</h1>
        <div className='row'>
            <div className='d-flex justify-content-between'>
            <FilterdProduct onFilterProductsByCategory = {filterProductsByCategory}/>
            <SortProducts onSortProductsByPrices={sortProductsByPrices}/>
            </div>
            {
                filtredProduct && filtredProduct.map((product,index) => {
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
</div>
  )
}
