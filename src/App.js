// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ItemsPage from "./pages/ItemsPage";
import CheckoutPage from "./pages/CheckoutPage";
import AddItemPage from "./pages/AddItemPage";
// import { getItems, addItem } from "./api/apiService";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

const App = () => {
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <Router>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<ItemsPage addToCart={addToCart} />} />
        <Route
          path="/checkout"
          element={<CheckoutPage cart={cart} setCart={setCart} />}
        />
        <Route path="/add" element={<AddItemPage />} />
      </Routes>
    </Router>
  );
};

export default App;
