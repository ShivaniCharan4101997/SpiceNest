import React, { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import Container from "../ui/Container";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Shop", to: "/shop" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-sm ">
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-amber-600">
          SpiceNest
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive
                      ? "text-amber-600"
                      : "text-white hover:text-amber-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          {/* logout/signup */}

          {user ? (
            <>
              <li className="text-white">{user.email}</li>
              <li>
                <button
                  onClick={logout}
                  className="text-white hover:text-amber-500"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" className="text-white hover:text-amber-500">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-white hover:text-amber-500">
                  Sign Up
                </Link>
              </li>
            </>
          )}
          <li>
            <Link
              to="/cart"
              className="relative text-white hover:text-amber-500"
            >
              <ShoppingCart className="w-6 h-6" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 text-white">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `transition-colors ${
                      isActive
                        ? "text-amber-400"
                        : "text-white hover:text-amber-400"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            {/* Auth Links for Mobile */}
            {user ? (
              <>
                <li className="text-amber-400">{user.email}</li>
                <li>
                  <button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    className="text-white hover:text-amber-400"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className="text-white hover:text-amber-400"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="text-white hover:text-amber-400"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}

            <li>
              <Link
                to="/cart"
                className="relative text-white hover:text-amber-400"
                onClick={() => setIsOpen(false)}
              >
                <ShoppingCart className="w-6 h-6" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
