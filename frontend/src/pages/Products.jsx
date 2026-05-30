import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Products({ cart, setCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");

      console.log("Products from API:", res.data);

      setProducts(res.data);
    } catch (error) {
      console.log("API Error:", error);
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  console.log("Current products state:", products);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar cartCount={cart.length} />

      <div className="text-center py-20">
        <h1 className="text-7xl font-bold text-purple-400">
          NeoStore
        </h1>

        <p className="text-gray-400 text-xl mt-6">
          Experience the Future of Online Shopping
        </p>

        <button className="mt-8 bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-xl text-lg">
          Explore Products
        </button>
      </div>

      <div className="text-center text-yellow-400 mb-4">
        Total Products Loaded: {products.length}
      </div>

      <div className="grid md:grid-cols-3 gap-8 p-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-gray-900 rounded-3xl p-6 border border-purple-500 shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold">
              {product.name}
            </h3>

            <p className="text-gray-400 mt-2">
              {product.description}
            </p>

            <p className="text-purple-400 text-xl mt-4">
              ₹{product.price}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="mt-4 w-full bg-purple-600 hover:bg-purple-700 py-2 rounded-lg"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;