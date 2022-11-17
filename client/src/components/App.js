
import { Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react"
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
    <div id="nav a">
      <NavBar />
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Routes>
      
    </div>
  )
}

export default App;
