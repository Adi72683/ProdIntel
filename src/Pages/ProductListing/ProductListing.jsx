import { useLocation,  } from "react-router-dom";
import OrbitInfo from "../../components/organisms/OrbitInfo/OrbitInfo";
import UImage from "../../assets/Images/Universe.jpg";
import LevelUnlockBar from "../../components/organisms/LevelUnlockBar/LevelUnlockBar";
import FeaturePlanet from "../../components/atoms/FeaturePlanet/FeaturePlanet";
import Orbit from "../../components/molecules/Orbit/Orbit";
import { useApp } from "../../context/AppContext";
function ProductListing() {

const {feature,category,products}=useApp();

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
    product.highlights?.some(highlight =>
      keywords.some(keyword =>
        highlight.toLowerCase().includes(keyword.toLowerCase())
      )
    )
  );

  const remainingProducts = products.filter(
    product =>
      !matchedProducts.some(
        p => p.id === product.id
      )
  );

  matchedProducts.sort((a, b) => b.rating - a.rating);

  remainingProducts.sort((a, b) => b.rating - a.rating);

  return [
    ...matchedProducts,
    ...remainingProducts,
  ].slice(0, 5);

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
 
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50">
      <LevelUnlockBar
        currentLevel={2}
        category={category}
        feature={feature}
        products={products}
      />
    </div>

    {/* Main Content */}
    <div className="pl-10 relative min-h-screen">

     <h1 className="pt-8 pl-0 text-5xl font-extrabold tracking-wide">
    <span className="text-white mr-3">Product</span>
    <span className="text-orange-500 ">Orbit</span>
  </h1>
  
      <div className="pt-24">
      <OrbitInfo feature={feature} />
      </div>

      <FeaturePlanet feature={feature} />

      {[...topProducts]
        .reverse()
        .map((product, reverseIndex) => {

          const index = topProducts.length - 1 - reverseIndex;

          return (
            <Orbit
              key={product.id}
              radius={orbitRadii[index]}
              product={product}
              index={index}
              feature={feature}
              category={category}
              products={products}
            />
          );

        })}

    </div>

  </div>

);
}

export default ProductListing;