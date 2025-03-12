import React, { useEffect, useState } from 'react'
import { useParams , Link } from 'react-router-dom'

export default function ProductByCategory() {
    let [products, setProduct] = useState(null)
    console.log(useParams().name)
    console.log(products)
    const name = useParams().name
    let url = `https://dummyjson.com/products/category/${name}`
    console.log(url);
    
    async function filterdProductByCategory() {
        let data = await fetch(url)
        let response = await data.json()
        setProduct(response.products)
    }
    useEffect(()=>{filterdProductByCategory()},[name])
    return (
        <div className='container'>
            <h1 className='text-center'>Products By Category</h1>
            <div className='row'>
                {
                    products && products.map((product) => {
                        return (
                            <div className='col-md-3 mt-3'>
                                <div className="card">
                                    <img src={product.thumbnail} className="card-img-top" alt="..." loading='lazy' />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title.slice(0, 15)}</h5>
                                        <p className="card-text">{product.description.slice(0, 95)}...</p>
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
