import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        🎉 Order Placed Successfully!
      </h1>
      <p className="mb-6">
        Thank you for shopping with us. Your order will be processed soon.
      </p>
      <Link
        to="/shop"
        className="bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderSuccess;
