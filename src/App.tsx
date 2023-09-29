import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header.js"
import Shop from "./pages/shop/Shop.js"
import Cart from "./pages/cart/Cart.js"
import ShopContextProvider from "./context/ShopContext.js"
import React from "react"

function App() {
  return (
    <ShopContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </ShopContextProvider>
  )
}

export default App
