const API_URL = "/api/products/category";
const IMAGE_CDN = "https://cdn.dummyjson.com/";

const categories = [
  "beauty",
  "skin-care",
  "fragrances",
];

function getLocalImageUrl(url) {
  if (typeof url !== "string" || !url) {
    return "";
  }

  return url.startsWith(IMAGE_CDN)
    ? url.replace(IMAGE_CDN, "/product-cdn/")
    : url;
}

export async function getBeautyProducts() {
  const responses = await Promise.all(
    categories.map(async (category) => {
      const response = await fetch(
        `${API_URL}/${category}?limit=3`
      );

      if (!response.ok) {
        throw new Error(
          `Unable to load ${category} products (${response.status})`
        );
      }

      const data = await response.json();

      return Array.isArray(data.products)
        ? data.products
        : [];
    })
  );

  const uniqueProducts = [
    ...new Map(
      responses
        .flat()
        .map((product) => [product.id, product])
    ).values(),
  ].slice(0, 8);

  return uniqueProducts.map((product) => ({
    ...product,
    thumbnail: getLocalImageUrl(product.thumbnail),
    images: Array.isArray(product.images)
      ? product.images.map(getLocalImageUrl)
      : [],
  }));
}