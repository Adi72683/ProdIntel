import { useLocation } from "react-router-dom";
import UImage from "../../assets/Images/Universe.jpg";
import Planet from "../../components/atoms/Planet/Planet";

function ProductUniverse() {
  const { state } = useLocation();
  const category = state?.category;
  const selectedFeatures = state?.selectedFeatures || [];
  const products = state?.products || [];

 const positions = [
  { left: "50%", top: "22%" }, 
  { left: "20%", top: "38%" },
  { left: "80%", top: "38%" }, 
  { left: "35%", top: "68%" }, 
  { left: "65%", top: "68%" }  
];

  const featureKeywords = {
    Camera: [
      "camera",
      "leica",
      "zeiss",
      "hasselblad",
      "sony"
    ],

    "Battery Life": [
      "battery"
    ],

    Display: [
      "display",
      "oled",
      "amoled",
      "retina"
    ],

    Performance: [
      "snapdragon",
      "processor",
      "tensor",
      "dimensity",
      "chip",
      "a18"
    ],

    Charging: [
      "charging",
      "supervooc",
      "flash charging",
      "turbo charging",
      "wireless charging"
    ]
  };

  function getTopProducts(feature) {

  const keywords = featureKeywords[feature] || [];

  let matches = products.filter(product =>
    product.highlights.some(highlight =>
      keywords.some(keyword =>
        highlight.toLowerCase().includes(keyword)
      )
    )
  );

  if (matches.length < 2) {

    const remaining = products.filter(
      product => !matches.includes(product)
    );

    remaining.sort((a, b) => b.rating - a.rating);

    matches = [
      ...matches,
      ...remaining.slice(0, 2 - matches.length)
    ];
  }

  return matches
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 2);
}
  return (
    <div
      className="min-h-screen relative bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${UImage})`
      }}
    >
      <h1 className="absolute top-8 left-8 text-6xl font-bold text-white z-50">
        Product <span className="text-purple-600">Universe</span>
      </h1>

      <div
        className="absolute inset-0"
        style={{
          transform: "translateY(80px)"
        }}
      >
      {selectedFeatures.map((feature, index) => (

      <div
          key={index}
          className="absolute"
          style={{
               left: positions[index].left,
               top: positions[index].top,
               transform: "translate(-50%, -50%)",
        }}
  >
    <Planet
      feature={feature}
      products={getTopProducts(feature)}
      category={category}
    />
  </div>

))}
      </div>
    </div>
  );
}

export default ProductUniverse;