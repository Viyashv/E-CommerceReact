import React from 'react'

export default function SortProducts(props) {
    return (
        <div className="dropdown mt-3">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sort Product
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
                <li><button className="dropdown-item" onClick={()=>{props.onSortProductsByPrices("asc")}}>Low to High</button></li>
                <li><button className="dropdown-item" onClick={()=>{props.onSortProductsByPrices("desc")}}>High to Low</button></li>
            </ul>
        </div>
    )
}
