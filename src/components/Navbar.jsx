
import { Link, NavLink } from "react-router-dom";
import {
  ShoppingBag,
  Menu,
  X,
  Search,
  Heart,
} from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const logo = "/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/#shop" },
  { label: "Skin Care", to: "/#skin-care" },
  { label: "Hair Care", to: "/#hair-care" },
  { label: "Makeup", to: "/#makeup" },
  { label: "Fragrances", to: "/#fragrances" },
  { label: "About Us", to: "/#about" },
];

export default function Navbar() {
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-beautyBorder bg-white/95 backdrop-blur">
      <div className="flex w-full items-center justify-between gap-3 px-5 py-4 sm:px-10 lg:px-16 xl:px-24">

        <Link
          to="/"
          aria-label="Hifza Beauty Products home"
          className="flex w-auto shrink-0 items-center"
        >
          <img
            src={logo}
            alt="Hifza Beauty Products"
           className="h-16 w-auto max-w-[180px] object-contain sm:h-20 sm:max-w-[220px] lg:h-24 lg:max-w-[260px]"
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-3 xl:gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="whitespace-nowrap text-xs font-medium text-darkText transition hover:text-beautyPink xl:text-sm"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        
        <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-2 lg:ml-0">
          <button
            aria-label="Search products"
            onClick={() =>
              document
                .getElementById("shop")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="hidden rounded-full p-2 transition hover:bg-lightBlush sm:block"
          >
            <Search size={19} />
          </button>

          <button
            aria-label="Wishlist"
            title="Wishlist coming soon"
            className="hidden rounded-full p-2 transition hover:bg-lightBlush sm:block"
          >
            <Heart size={19} />
          </button>

          <Link
            to="/cart"
            aria-label={`Shopping cart, ${cartCount} items`}
            className="relative rounded-full bg-lightBlush p-2.5 text-deepRose transition hover:bg-blush sm:p-3"
          >
            <ShoppingBag size={20} />

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-beautyPink px-1 text-xs font-bold text-white">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </Link>

          <button
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full p-2 transition hover:bg-lightBlush lg:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="border-t border-beautyBorder bg-white px-4 py-3 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-beautyBorder py-3 text-sm font-medium transition hover:text-beautyPink"
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className="mt-3 block py-2 font-semibold text-deepRose"
          >
            View Shopping Cart ({cartCount})
          </Link>
        </nav>
      )}
    </header>
  );
}
