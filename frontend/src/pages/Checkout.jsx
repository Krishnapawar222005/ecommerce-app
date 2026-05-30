import { useState } from "react";
import API from "../services/api";

function Checkout() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/orders", {
        name: form.name,
        email: form.email,
        address: form.address,
        total: 50000,
      });

      alert("Order Placed Successfully!");

      setForm({
        name: "",
        email: "",
        address: "",
      });
    } catch (error) {
      console.log(error);
      alert("Failed to place order");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-purple-400 mb-8">
        Checkout
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md"
      >
        <input
          type="text"
          placeholder="Enter Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="p-3 rounded-lg bg-gray-800 text-white border border-purple-500"
          required
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          className="p-3 rounded-lg bg-gray-800 text-white border border-purple-500"
          required
        />

        <textarea
          placeholder="Enter Address"
          value={form.address}
          onChange={(e) =>
            setForm({ ...form, address: e.target.value })
          }
          className="p-3 rounded-lg bg-gray-800 text-white border border-purple-500"
          rows="4"
          required
        />

        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 p-3 rounded-lg font-bold"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;