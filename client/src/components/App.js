
import { BrowserRouter, Route, Routes } from "react-router-dom"
import React, { useEffect, useState } from "react"
import NavBar from "./NavBar/NavBar"
import Home from "./Home"
import Shop from "./Shop"
import Contact from "./Contact"
import Cart from "./Cart"
import Banner from "./Banner/Banner"
import News from "./news"
import axios from 'axios';

import { UIProvider } from '../context/context'




function App() {
  const [products, setProducts] = useState([])
  const API_BASE_URL = 'http://localhost:3000'
  


  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`${API_BASE_URL}/products`)
      const data = await response.json()
      setProducts(data) 
    }
    fetchProducts()
  }, [])
  return (
    <UIProvider>

    <BrowserRouter>
     <NavBar />
     <Banner />
     <News />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop products={ products } />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Cart />
    </BrowserRouter>
    </UIProvider>
    
      
  );
}

export default App;
