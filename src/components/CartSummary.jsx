
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartSummary() {
  const { cart, totalQuantity, subtotal, clearCart } = useCart();

  return (
    <aside className="rounded-2xl border border-beautyBorder bg-lightBlush p-5 sm:p-6">
      <h2 className="font-display text-2xl font-bold">
        Order Summary
      </h2>

      <div className="mt-6 space-y-4 border-b border-beautyBorder pb-5">
        <div className="flex justify-between gap-3 text-sm">
          <span className="text-mutedText">Subtotal</span>
          <span className="font-semibold">
            ${subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between gap-3 text-sm">
          <span className="text-mutedText">Total Quantity</span>
          <span className="font-semibold">
            {totalQuantity}
          </span>
        </div>

        <div className="flex justify-between gap-3 text-sm">
          <span className="text-mutedText">Shipping</span>
          <span className="font-semibold">Calculated later</span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 py-5">
        <span className="font-semibold">Total Price</span>
        <span className="text-2xl font-bold text-deepRose">
          ${subtotal.toFixed(2)}
        </span>
      </div>

      <p className="mb-5 text-xs leading-5 text-mutedText">
        Shipping and taxes are not included in this demo total.
      </p>

      <button
        disabled={cart.length === 0}
        onClick={() =>
          window.alert(
            "Checkout is a demo feature and is not connected to a payment service."
          )
        }
        className="flex w-full items-center justify-center gap-2 rounded-full bg-beautyPink px-5 py-4 font-semibold text-white transition hover:bg-deepRose disabled:cursor-not-allowed disabled:opacity-50"
      >
        Proceed to Checkout
        <ArrowRight size={18} />
      </button>

      <Link
        to="/"
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-beautyBorder bg-white px-5 py-3 font-semibold text-deepRose transition hover:bg-blush"
      >
        <ShoppingBag size={18} />
        Continue Shopping
      </Link>

      {cart.length > 0 && (
        <button
          onClick={() => {
            if (window.confirm("Remove all items from your cart?")) {
              clearCart();
            }
          }}
          className="mt-4 flex w-full items-center justify-center gap-2 text-sm text-mutedText transition hover:text-red-500"
        >
          <Trash2 size={16} />
          Clear Cart
        </button>
      )}
    </aside>
  );
}
