import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

export default function AuthForm({ type = "login" }) {
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const isLogin = type === "login";

  const validateForm = () => {
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      if (isLogin) {
        await login(email, password);
        toast.success("Login successful!");
      } else {
        await signup(email, password);
        toast.success("Signup successful!");
      }
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-20 space-y-4 p-6 border rounded-lg shadow-lg bg-white"
    >
      <h2 className="text-2xl font-bold text-center text-amber-700">
        {isLogin ? "Login" : "Sign Up"}
      </h2>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded transition ${
          loading && "opacity-70 cursor-not-allowed"
        }`}
      >
        {loading ? "Please wait..." : isLogin ? "Login" : "Sign Up"}
      </button>

      {/* The extra text + link */}
      <p className="text-center text-sm text-gray-600">
        {isLogin ? (
          <>
            Don’t have an account?{" "}
            <Link to="/signup" className="text-amber-600 hover:underline">
              Sign Up
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link to="/login" className="text-amber-600 hover:underline">
              Login
            </Link>
          </>
        )}
      </p>
    </form>
  );
}
