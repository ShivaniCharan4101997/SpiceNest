import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "../context/CartContext";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) {
    return (
      <p className="text-center mt-10 text-gray-600">Loading product...</p>
    );
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate("/shop")}
          className="mb-6 text-indigo-500 hover:text-indigo-700 flex items-center gap-2"
        >
          ← Back to Shop
        </button>

        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* Product Image */}
          <img
            alt={product.title}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={product.thumbnail}
          />

          {/* Product Details */}
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product.brand || "Unknown Brand"}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex mb-4">
              <span className="flex items-center">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    fill={
                      i < Math.round(product.rating) ? "currentColor" : "none"
                    }
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                ))}
                <span className="text-gray-600 ml-3">
                  {product.rating} Stars
                </span>
              </span>
            </div>

            <p className="leading-relaxed">{product.description}</p>

            {/* Price + Add to Cart */}
            <div className="flex mt-6 items-center border-b-2 border-gray-100 pb-5 mb-5"></div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${product.price}
              </span>
              <button
                onClick={() => {
                  addToCart(product);
                  toast.success(`${product.title} added to cart!`);
                }}
                className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
