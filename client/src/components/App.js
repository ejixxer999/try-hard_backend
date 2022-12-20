import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar/NavBar";
import Home from "./Home";
import Shop from "./Shop";
import Contact from "./Contact";
import Cart from "./cart";
import Login from "./Login"
import LogoutPage from "./LogoutPage";
import Register from "./Register";
import { UIProvider } from "../context/context";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Orders from "./orders";

/** to add user past orders, and update quanity */
/** code to dream */

function App() {


  return (
    <UIProvider>
      <ToastContainer />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/orders" element={<Orders />} />
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
