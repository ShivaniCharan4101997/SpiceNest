import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Shop from "./pages/Shop";
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Cart";
import { AuthProvider } from "./context/AuthContext";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import SingleProduct from "./pages/SingleProduct";
import ContactUs from "./components/ContactUs";
import OrderSuccess from "./pages/OrderSuccess";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/order-success" element={<OrderSuccess />} />
          </Routes>
          <Footer />
          <ToastContainer position="top-right" autoClose={3000} />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
