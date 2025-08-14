import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import CheckoutModal from "../components/Modal";

const Cart = () => {
  const {
    cart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const [isModalOpen, setIsModalOpen] = useState(false); // modal state

  // Calculate total price
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="grid  md:grid-cols-[60%_34%] gap-12 px-6 py-26 mx-4 ">
      {/* Shopping cart */}
      <div>
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h1 className="text-2xl font-bold">Shopping Cart</h1>
          <h2 className="text-gray-500">{cart.length} Items</h2>
        </div>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-3"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p>
                      ${item.price} x {item.quantity}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decrementQuantity(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => incrementQuantity(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <button
            onClick={clearCart}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Clear Cart
          </button>
        )}
      </div>

      {/* Order Summary */}
      <div className="p-4 border rounded shadow-md h-fit">
        <h1 className="text-xl font-bold mb-4">Order Summary</h1>
        <div className="flex justify-between mb-2">
          <span>Items ({cart.length})</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>

        {/* Checkout Button opens modal */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-4 w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700"
        >
          Checkout
        </button>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        totalPrice={totalPrice || 0}
      />
    </section>
  );
};

export default Cart;
