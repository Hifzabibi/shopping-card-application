
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import Navbar from "../components/Navbar";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, totalQuantity } = useCart();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-mutedText transition hover:text-deepRose"
        >
          <ArrowLeft size={17} />
          Continue Shopping
        </Link>

        <div className="mt-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-deepRose">
            Your Selection
          </p>

          <h1 className="font-display mt-2 text-3xl font-bold sm:text-4xl">
            Shopping Cart
          </h1>

          <p className="mt-2 text-sm text-mutedText">
            {totalQuantity} item{totalQuantity !== 1 ? "s" : ""} in your cart
          </p>
        </div>

        {cart.length === 0 ? (
          <section className="mx-auto flex max-w-xl flex-col items-center py-20 text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-lightBlush text-deepRose">
              <ShoppingBag size={42} strokeWidth={1.5} />
            </div>

            <h2 className="font-display mt-6 text-2xl font-bold">
              Your Cart Is Empty
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-6 text-mutedText">
              You haven't added any beauty products yet.
              Explore our collection and find your favorites.
            </p>

            <Link
              to="/"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-beautyPink px-7 py-3.5 font-semibold text-white transition hover:bg-deepRose"
            >
              <ShoppingBag size={18} />
              Start Shopping
            </Link>
          </section>
        ) : (
          <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1fr_360px]">
            <section className="space-y-4">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </section>

            <CartSummary />
          </div>
        )}
      </main>
    </div>
  );
}
