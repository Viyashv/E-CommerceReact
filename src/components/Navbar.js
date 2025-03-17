import React ,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {themeContext} from '../context/ThemeProvider'


export default function Navbar() {
  let [category , setCategory] = useState(null)
  async function GetCategory() {
    let response = await fetch("https://dummyjson.com/products/categories")
    let data = await response.json()
    setCategory(data)
  }
  
  useEffect(()=>{
    GetCategory()
  },[])
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to={'/'} >Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to={"/"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/contact"}>Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/product"}>Products</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul className="dropdown-menu">
            {category && category.map((categories , index)=>{
              return (<li><Link className="dropdown-item" key={index} to={`/product/category/${categories.name}`}>{categories.name}</Link></li>)
            })
            }
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <span className='mx-2 text-light'>|</span>
      <i class="bi bi-brightness-high-fill text-light mx-1" onClick={()=> {setTheme("light")}}></i>
      <i class="bi bi-moon-fill text-light" onClick={()=> {setTheme("dark")}}></i>
    </div>
  </div>
</nav>
    </div>
  )
}
