import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Home / Products */}
        <Route
          path="/"
          element={
            <Products
              cart={cart}
              setCart={setCart}
            />
          }
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={<Cart cart={cart} />}
        />

        {/* Checkout */}
        <Route
          path="/checkout"
          element={<Checkout />}
        />

        {/* Orders */}
        <Route
          path="/orders"
          element={<Orders />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;