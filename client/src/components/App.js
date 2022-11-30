
import { BrowserRouter, Route, Routes } from "react-router-dom"
import React, { useEffect, useState } from "react"
import NavBar from "./NavBar"
import Home from "./Home"
import Shop from "./Shop"
import Contact from "./Contact"
import Cart from "./Cart"


function App() {
  const [products, setProducts] = useState([])


  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:3000/products')
      const data = await response.json()
      setProducts(data) 
    }
    fetchProducts()
  }, [])
  return (
    <BrowserRouter>
     <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop products={ products } />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Cart />
    </BrowserRouter>
      
  );
}

export default App;
