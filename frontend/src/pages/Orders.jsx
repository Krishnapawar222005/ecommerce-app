import { useEffect, useState } from "react";
import API from "../services/api";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await API.get("/orders");
      setOrders(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-purple-400">
        My Orders
      </h1>

      {orders.length === 0 ? (
        <p className="mt-5">No Orders Found</p>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            className="bg-gray-900 p-5 rounded-xl mt-5"
          >
            <h2>{order.name}</h2>
            <p>{order.email}</p>
            <p>{order.address}</p>
            <p>₹{order.total}</p>
            <p className="text-purple-400">
              Status: {order.status}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;