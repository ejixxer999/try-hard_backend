import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar/NavBar";
import Home from "./Home";
import Shop from "./Shop";
import Contact from "./Contact";
import Banner from "./Banner/Banner";
import News from "./news";
import Cart from "./cart";
import Login from "./Login"
import LogoutPage from "./LogoutPage";
import Register from "./Register";

import { UIProvider } from "../context/context";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [products, setProducts] = useState([]);
  const API_BASE_URL = "http://localhost:3000";

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`${API_BASE_URL}/products`);
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <UIProvider>
      <ToastContainer />
      <BrowserRouter>
        <NavBar />
        <Banner />
        <News />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<Shop products={products} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
        <Cart />
      </BrowserRouter>
    </UIProvider>
  );
}

export default App;
