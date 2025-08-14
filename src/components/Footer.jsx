import Container from "../ui/Container";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-amber-50 text-gray-700 mt-16">
      <Container className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-amber-500 hover:text-amber-600">
              SpiceNest
            </h2>
            <p className="mt-3 text-sm">
              Your one-stop shop for quality products at great prices.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-amber-500">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-amber-500">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-amber-500">Customer Service</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-amber-500">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-500">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-500">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-500">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-amber-500">Follow Us</h3>
            <div className="flex gap-4 mt-3">
              <Link href="#" className="hover:text-amber-500">
                <Facebook />
              </Link>
              <Link href="#" className="hover:text-amber-500">
                <Instagram />
              </Link>
              <Link href="#" className="hover:text-amber-500">
                <Twitter />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Shopree. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
