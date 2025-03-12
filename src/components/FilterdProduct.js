
import React, { useEffect, useState } from 'react'

export default function FilterdProduct(props) {
    let [filterdProduct , setProduct] = useState(null)
    async function getFilterdProduct() {
        let response = await fetch('https://dummyjson.com/products/categories')
        let data = await response.json()
        setProduct(data)
    }
    useEffect(()=>{getFilterdProduct()},[])
    return (
        <div className="dropdown mt-3">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Category
            </button>
            <ul className="dropdown-menu">{
                filterdProduct && filterdProduct.map((product) => {
                    return <li><button className='border-0 bg-white' onClick={()=>{props. onFilterProductsByCategory(product.name)}}>{product.name}</button></li>
                })
            }
            </ul>
        </div>
    )
}
