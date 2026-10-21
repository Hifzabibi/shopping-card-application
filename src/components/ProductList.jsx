import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  LoaderCircle,
  Search,
  RefreshCw,
} from "lucide-react";

import { getBeautyProducts } from "../services/productApi.js";
import ProductCard from "./ProductCard";

const filters = [
  { label: "All Products", value: "all" },
  { label: "Beauty", value: "beauty" },
  { label: "Skin Care", value: "skin-care" },
  { label: "Fragrances", value: "fragrances" },
];

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [search, setSearch] = useState("");

  const loadProducts = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const data = await getBeautyProducts();

      if (!Array.isArray(data)) {
        throw new Error("Invalid product data received.");
      }

      setProducts(data);
    } catch (err) {
      console.error("Product API Error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Unable to load products. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const filteredProducts = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        activeFilter === "all" ||
        product.category === activeFilter;

      const title = product.title?.toLowerCase() || "";
      const description =
        product.description?.toLowerCase() || "";

      const matchesSearch =
        title.includes(searchText) ||
        description.includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [products, activeFilter, search]);

  return (
    <section
      id="shop"
      className="w-full bg-lightBlush/40"
    >
      <div className="w-full px-5 py-20 sm:px-10 lg:px-16 xl:px-24">
        {/* Section Heading */}
        <div className="text-center">
          <p className="text-base font-semibold uppercase tracking-[0.3em] text-deepRose sm:text-lg">
            Made for Your Glow
          </p>

          <h2 className="font-display mt-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Our Beauty Collection
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-mutedText sm:text-lg lg:text-xl">
            Find your favorites across skincare, makeup and fragrance.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() =>
                  setActiveFilter(filter.value)
                }
                className={`rounded-full border px-5 py-3 text-sm font-medium transition sm:px-6 sm:text-base ${
                  activeFilter === filter.value
                    ? "border-beautyPink bg-beautyPink text-white"
                    : "border-beautyBorder bg-white text-darkText hover:border-beautyPink hover:text-deepRose"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <label className="flex items-center gap-3 rounded-full border border-beautyBorder bg-white px-5 py-3.5 focus-within:border-beautyPink">
            <Search
              size={20}
              className="shrink-0 text-mutedText"
            />

            <input
              type="search"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search products..."
              className="w-full bg-transparent text-base outline-none sm:w-64"
            />
          </label>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex min-h-64 flex-col items-center justify-center gap-3">
            <LoaderCircle
              className="animate-spin text-beautyPink"
              size={40}
            />

            <p className="text-base text-mutedText">
              Loading products...
            </p>
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="mx-auto mt-10 max-w-lg rounded-2xl border border-beautyBorder bg-lightBlush p-8 text-center">
            <p className="text-lg font-semibold text-deepRose">
              Products could not be loaded
            </p>

            <p className="mt-2 break-words text-base text-mutedText">
              {error}
            </p>

            <button
              type="button"
              onClick={loadProducts}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-beautyPink px-6 py-3 text-base font-semibold text-white transition hover:opacity-90"
            >
              <RefreshCw size={18} />
              Try Again
            </button>
          </div>
        )}

        {/* Products Grid */}
        {!loading &&
          !error &&
          filteredProducts.length > 0 && (
            <>
              <p className="mb-6 mt-10 text-base text-mutedText">
                Showing {filteredProducts.length} products
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            </>
          )}

        {/* Empty State */}
        {!loading &&
          !error &&
          filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <p className="font-display text-3xl font-semibold">
                No products found
              </p>

              <p className="mt-2 text-base text-mutedText">
                Try another search or category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveFilter("all");
                }}
                className="mt-5 rounded-full bg-beautyPink px-6 py-3 font-semibold text-white"
              >
                View All Products
              </button>
            </div>
          )}
      </div>
    </section>
  );
}