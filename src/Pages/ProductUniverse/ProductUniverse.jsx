import { useLocation } from "react-router-dom";
import UImage from "../../assets/Images/Universe.jpg";
import Planet from "../../components/atoms/Planet/Planet";
import LevelUnlockBar from "../../components/organisms/LevelUnlockBar/LevelUnlockBar";
import { useApp } from "../../context/AppContext";


function ProductUniverse() {
 const {category,products,selectedFeatures}=useApp();

 const positions = [
  { left: "50%", top: "22%" }, 
  { left: "25%", top: "38%" },
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
    product.highlights?.some(highlight =>
      keywords.some(keyword =>
        highlight.toLowerCase().includes(keyword.toLowerCase())
      )
    )
  );

  if (matches.length < 2) {

    const remaining = products.filter(
      product => !matches.some(p => p.id === product.id)
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
    className="relative min-h-screen bg-cover bg-center overflow-hidden"
    style={{
      backgroundImage: `url(${UImage})`
    }}
  >
    {/* Fixed Mission Progress */}
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50">
      <LevelUnlockBar
        currentLevel={1}
        category={category}
        products={products}
      />
    </div>

    {/* Main Content */}
    <div className="pl-20 relative min-h-screen">

  <h1 className="pt-8 -ml-12 text-5xl font-extrabold tracking-wide">
  <span className="text-white">Galaxy</span>
  <span className="text-orange-500">Explorer</span>
  </h1>
      <div
        className="absolute inset-0 pt-24"
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
              previewProducts={getTopProducts(feature)}
              products={products}
              category={category}
            />

          </div>

        ))}

      </div>

    </div>

  </div>

);
}

export default ProductUniverse;