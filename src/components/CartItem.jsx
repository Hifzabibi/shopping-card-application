
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-beautyBorder bg-white p-4 sm:flex-row sm:items-center">
      <div className="flex h-28 w-full shrink-0 items-center justify-center rounded-xl bg-lightBlush p-3 sm:h-28 sm:w-28">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-darkText">
          {item.title}
        </h3>

        <p className="mt-2 text-sm text-mutedText">
          ${item.price.toFixed(2)} each
        </p>

        <p className="mt-2 font-bold text-deepRose">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      <div className="flex items-center justify-between gap-4 sm:justify-end">
        <div className="flex items-center rounded-full border border-beautyBorder">
          <button
            aria-label={`Decrease ${item.title} quantity`}
            onClick={() => decreaseQuantity(item.id)}
            disabled={item.quantity <= 1}
            className="rounded-l-full p-2.5 transition hover:bg-lightBlush disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Minus size={16} />
          </button>

          <span className="min-w-10 text-center text-sm font-semibold">
            {item.quantity}
          </span>

          <button
            aria-label={`Increase ${item.title} quantity`}
            onClick={() => increaseQuantity(item.id)}
            className="rounded-r-full p-2.5 transition hover:bg-lightBlush"
          >
            <Plus size={16} />
          </button>
        </div>

        <button
          aria-label={`Remove ${item.title}`}
          onClick={() => removeFromCart(item.id)}
          className="rounded-full p-3 text-red-500 transition hover:bg-red-50"
        >
          <Trash2 size={19} />
        </button>
      </div>
    </article>
  );
}
