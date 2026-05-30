function Navbar({ cartCount }) {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-gray-950 border-b border-purple-500">
      <h1 className="text-3xl font-bold text-purple-400">
        NeoStore
      </h1>

      <div className="flex gap-6 items-center">
        <button className="hover:text-purple-400">
          Home
        </button>

        <button className="hover:text-purple-400">
          Products
        </button>

        <button className="hover:text-purple-400">
          Login
        </button>

        <button className="hover:text-purple-400">
          Register
        </button>

        <div className="bg-purple-600 px-4 py-2 rounded-lg">
          🛒 {cartCount}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;