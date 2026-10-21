import { ShoppingBag, Star, Check } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  const [imageSrc, setImageSrc] = useState(
    product.thumbnail || product.images?.[0] || ""
  );

  const category = product.category
    ?.replaceAll("-", " ")
    ?.replace(/\b\w/g, (letter) => letter.toUpperCase());

  const rating = Number(product.rating);

  const handleImageError = () => {
    const fallback = product.images?.[0];

    if (fallback && imageSrc !== fallback) {
      setImageSrc(fallback);
    } else {
      setImageFailed(true);
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);

    window.setTimeout(() => setAdded(false), 1200);
  };

  return (
    <article className="group overflow-hidden rounded-2xl border border-beautyBorder bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-100/70">
      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-lightBlush p-5 sm:h-64">
        {!imageFailed && imageSrc ? (
          <img
            src={imageSrc}
            alt={product.title}
            className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
            loading="lazy"
            onError={handleImageError}
          />
        ) : (
          <p className="text-sm text-mutedText">
            Image unavailable
          </p>
        )}

        {Number(product.discountPercentage) > 0 && (
          <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-deepRose shadow-sm">
            {Math.round(product.discountPercentage)}% OFF
          </span>
        )}
      </div>

      <div className="p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-deepRose">
          {category}
        </p>

        <h3
          title={product.title}
          className="mt-2 min-h-12 line-clamp-2 font-semibold text-darkText"
        >
          {product.title}
        </h3>

        {Number.isFinite(rating) && (
          <div className="mt-2 flex items-center gap-1 text-sm text-mutedText">
            <Star size={15} fill="#E91E63" color="#E91E63" />
            <span>{rating.toFixed(1)}</span>
          </div>
        )}

        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="text-lg font-bold text-deepRose">
            ${Number(product.price).toFixed(2)}
          </span>

          <button
            type="button"
            onClick={handleAddToCart}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-beautyPink px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-deepRose sm:px-4 sm:text-sm"
          >
            {added ? <Check size={16} /> : <ShoppingBag size={16} />}
            {added ? "Added" : "Add"}
          </button>
        </div>
      </div>
    </article>
  );
}