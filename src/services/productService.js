import { searchProducts } from "./serpApi";
import { mapSerpProducts } from "../utils/mapSerpProducts";
import { enrichProducts } from "./geminiService";

import smartphones from "./dummyApi/smartphones";
import laptops from "./dummyApi/laptops";
import tablets from "./dummyApi/tablets";
import headphones from "./dummyApi/headphones";
import smartwatches from "./dummyApi/smartwatches";

const dummyProducts = {
  smartphones,
  laptops,
  tablets,
  headphones,
  smartwatches,
};

export async function getProducts(searchTerm, category) {

  console.log("Trying SERP API...");

  const serpProducts = await searchProducts(searchTerm);

  if (serpProducts && serpProducts.length > 0) {

    console.log("SERP API Success");

    // Convert SERP response into your product model
    const mappedProducts = mapSerpProducts(
      serpProducts,
      category
    );

    // Ask Gemini to enrich ALL products
    const enrichedProducts =
      await enrichProducts(mappedProducts);

    // Dummy products (used as fallback if Gemini misses fields)
    const dummy = dummyProducts[category] || [];

    return mappedProducts.map((serpProduct) => {

      const gemini = enrichedProducts.find(
        p => p.id === serpProduct.id
      );

      const dummyMatch = dummy.find((d) =>
        serpProduct.title
          .toLowerCase()
          .includes(d.title.toLowerCase())
      );

      return {

        ...serpProduct,

        // Gemini-generated content
        description:
          gemini?.description ||
          dummyMatch?.description ||
          serpProduct.description,

        highlights:
          gemini?.highlights ||
          dummyMatch?.highlights ||
          [],

        specifications:
          gemini?.specifications ||
          dummyMatch?.specifications ||
          {},

        // Live SERP values
        price:
          serpProduct.price ||
          dummyMatch?.price ||
          0,

        rating:
          serpProduct.rating ||
          dummyMatch?.rating ||
          0,

        reviews:
          serpProduct.reviews ||
          dummyMatch?.reviews ||
          0,

        image:
          serpProduct.image ||
          dummyMatch?.image ||
          "",

        link:
          serpProduct.link,

      };

    });

  }

  console.log("SERP Failed → Using Dummy Products");

  return dummyProducts[category] || [];

}