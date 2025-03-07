import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter } from 'react-router-dom';
import Errorpage from './components/Errorpage.js';
import Contact from './components/Contact.js';
import { RouterProvider } from 'react-router-dom';
import Products from './components/Products.js';
import Product_details from './components/Product_details.js';

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Errorpage/>,
    children: [
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/product',
        element: <Products />
      },
      {
        path: '/product/:id',
        element: <Product_details />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter}>
      <Home />
    </RouterProvider>
  </React.StrictMode>
);


