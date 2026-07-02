export function mapSerpProducts(products, category) {

  return products.map((item, index) => ({

    id: index + 1,

    title: item.title || "",

    // Store where the product is listed
    store: item.source || "Store",

    // Brand (optional)
    brand: item.brand || item.source || "Unknown",

    category,

    price: item.extracted_price || 0,

    rating: item.rating || 0,

    reviews: item.reviews || 0,

    image: item.thumbnail || "",

    description: item.snippet || "",

    highlights: [],

    specifications: {},

    link: item.product_link || "",

  }));

}