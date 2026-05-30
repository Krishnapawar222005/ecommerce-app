import { Link } from "react-router-dom";

function Cart({ cart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-purple-400">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <p className="mt-5">
          Cart is Empty
        </p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-5 rounded-xl mt-5"
            >
              <h2 className="text-2xl">
                {item.name}
              </h2>

              <p className="text-purple-400">
                ₹{item.price}
              </p>
            </div>
          ))}

          <h2 className="text-3xl mt-8">
            Total: ₹{total}
          </h2>

          <Link
            to="/checkout"
            className="inline-block mt-5 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl"
          >
            Proceed to Checkout
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;