import React, { useEffect, useState } from 'react';

export default function Carousel() {
  const [products, setProducts] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);

  // Fetch products on component mount
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  // Set up interval to change slide every 2 seconds
  useEffect(() => {
    if (products.length === 0) return; // wait until products are loaded

    const interval = setInterval(() => {
      setSlideIndex(prevIndex => (prevIndex + 1) % products.length);
    }, 2000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [products]);

  return (
    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {products.map((product, index) => (
          <div className={`carousel-item ${index === slideIndex ? "active" : ""}`} key={product.id}>
            <img src={product.thumbnail} className="d-block mx-auto" alt={`Product ${product.id}`} height="350" />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" 
        data-bs-slide="prev" 
        onClick={() =>setSlideIndex(prevIndex => (prevIndex - 1 + products.length) % products.length)
        }
      >
        <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button 
        className="carousel-control-next" 
        type="button" 
        data-bs-target="#carouselExampleRide" 
        data-bs-slide="next"
        onClick={() =>
          setSlideIndex(prevIndex => (prevIndex + 1) % products.length)
        }
      >
        <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
