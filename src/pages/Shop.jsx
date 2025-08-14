import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import ProductSkeleton from "../ui/ProductSkeleton";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  // const [result, setResult] = useState([]);

  // ?debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products/categories");
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const url =
          selectedCategory === "all"
            ? "https://dummyjson.com/products?limit=12"
            : `https://dummyjson.com/products/category/${selectedCategory}`;
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data.products || []);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [selectedCategory]);

  // filter products on search
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(debouncedQuery.toLowerCase())
  );
  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-5">
        {/* Title */}
        <h1 className="text-3xl font-bold text-amber-700 mb-8 text-center">
          Our Spices
        </h1>

        {/* Dropdown Filter  and search bar */}
        <div>
          <div className="flex justify-center mb-8">
            <select
              onChange={(e) => setSelectedCategory(e.target.value)}
              value={selectedCategory}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="all">All Spices</option>
              {categories.map((cat) => (
                <option key={cat.slug} value={cat.slug}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* search bar */}
          <div>
            <input
              type="text"
              placeholder="Search Products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-amber-500 my-6"
            />
            <div className="results">
              {products.length === 0 && debouncedQuery && <p></p>}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[...Array(8)].map((_, i) => (
              <ProductSkeleton key={i} />
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Link to={`/shop/${product.id}`}>
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800 truncate">
                    {product.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-2 truncate capitalize">
                    {product.category}
                  </p>
                  <p className="text-amber-600 font-bold">${product.price}</p>
                  <button
                    className="mt-4 w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No products found in this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default Shop;
