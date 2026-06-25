import { useLocation } from "react-router-dom";

import UImage from "../../assets/Images/Universe.jpg";

import FeaturePlanet from "../../components/atoms/FeaturePlanet/FeaturePlanet";
import Orbit from "../../components/molecules/Orbit/Orbit";

import smartphones from "../../services/dummyApi/smartphones";
import laptops from "../../services/dummyApi/laptops";
import tablets from "../../services/dummyApi/tablets";
import headphones from "../../services/dummyApi/headphones";
import smartwatches from "../../services/dummyApi/smartwatches";

function ProductListing() {

  const { state } = useLocation();

  const feature = state?.feature || "";
  const category = state?.category || "";

  const categoryMap = {
    smartphones,
    laptops,
    tablets,
    headphones,
    smartwatches,
  };

  const products = categoryMap[category] || [];

  const featureKeywords = {
    Camera: ["camera", "leica", "zeiss", "sony", "hasselblad"],

    "Battery Life": ["battery"],

    Display: ["display", "oled", "amoled", "retina"],

    Performance: [
      "processor",
      "snapdragon",
      "tensor",
      "dimensity",
      "m4",
      "intel",
      "amd",
      "chip"
    ],

    Charging: [
      "charging",
      "supervooc",
      "flash charging",
      "turbo charging",
      "wireless charging"
    ],

    "Sound Quality": [
      "sound",
      "hi-res",
      "bass",
      "audio"
    ],

    Comfort: [
      "comfort"
    ],

    Connectivity: [
      "bluetooth",
      "connectivity",
      "multipoint"
    ],

    "Noise Cancellation": [
      "anc",
      "noise cancellation"
    ],

    "Health Tracking": [
      "health"
    ],

    "Fitness Features": [
      "fitness"
    ],

    Portability: [
      "portable",
      "lightweight",
      "thin",
      "slim"
    ],

    "Build Quality": [
      "premium",
      "aluminum",
      "build"
    ]
  };

  function getTopProducts(feature) {

    const keywords =
      featureKeywords[feature] || [feature.toLowerCase()];

    const matchedProducts = products.filter(product =>
      product.highlights.some(highlight =>
        keywords.some(keyword =>
          highlight.toLowerCase().includes(keyword.toLowerCase())
        )
      )
    );

    return matchedProducts
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 5);
  }

  const topProducts = getTopProducts(feature);

  const orbitRadii = [180, 280, 380, 480, 580];

  return (

    <div
      className="relative min-h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${UImage})`,
      }}
    >

      <h1 className="absolute top-8 left-8 text-6xl font-bold text-white">
        Product <span className="text-yellow-400">Listing</span>
      </h1>

      <FeaturePlanet feature={feature} />

      {topProducts.map((product, index) => (

        <Orbit
          key={product.id}
          radius={orbitRadii[index]}
          product={product}
          index={index}
        />

      ))}

    </div>

  );

}

export default ProductListing;