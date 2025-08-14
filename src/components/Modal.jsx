import React, { useState } from "react";
import { toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CheckoutModal = ({ isOpen, onClose, totalPrice }) => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    pincode: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (
      !form.name ||
      !form.email ||
      !form.address ||
      !form.pincode ||
      !form.mobile
    ) {
      toast.error("All fields are required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      toast.error("Invalid email");
      return false;
    }
    if (!/^\d{6}$/.test(form.pincode)) {
      toast.error("Invalid pincode");
      return false;
    }
    if (!/^\+?\d{10,15}$/.test(form.mobile.trim())) {
      toast.error("Invalid mobile number");
      return false;
    }

    return true;
  };

  const handleOrderNow = async () => {
    if (!validateForm()) return;

    try {
      await addDoc(collection(db, "orders"), {
        ...form,
        cart,
        totalPrice,
        createdAt: new Date(),
      });

      toast.success("Order placed successfully!");
      clearCart();
      onClose();
      navigate("/order-success");
    } catch (error) {
      console.error(error);
      toast.error("Failed to place order. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-xl font-bold mb-4">Checkout</h2>

        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
        />
        <textarea
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
        />
        <input
          name="pincode"
          placeholder="Pincode"
          value={form.pincode}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
        />
        <input
          name="mobile"
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
        />

        <div className="flex justify-between items-center mt-4">
          <span className="font-bold text-lg">
            Total: ${totalPrice.toFixed(2)}
          </span>
          <button
            onClick={handleOrderNow}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Order Now
          </button>
        </div>

        <button
          onClick={onClose}
          className="mt-4 w-full text-center text-gray-500 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CheckoutModal;
