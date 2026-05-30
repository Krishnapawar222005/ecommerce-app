import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-black border-b border-purple-500 shadow-lg">
      <h1 className="text-4xl font-bold text-purple-400">
        NeoStore
      </h1>

      <div className="flex items-center gap-6 text-white">
        <Link
          to="/"
          className="hover:text-purple-400 transition"
        >
          Products
        </Link>

        <Link
          to="/cart"
          className="bg-purple-600 px-4 py-2 rounded-xl font-bold hover:bg-purple-700"
        >
          🛒 {cartCount}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;