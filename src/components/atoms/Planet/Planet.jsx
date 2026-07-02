import { useNavigate } from "react-router-dom";
import { useApp } from "../../../context/AppContext";
function Planet({ feature, previewProducts, products, category }) {
  const navigate = useNavigate();
  const {
  setFeature,
} = useApp();
  function handlePlanetClick() {
    setFeature(feature);
    navigate("/products");
  }

  return (
    <div
      onClick={handlePlanetClick}
      className="relative w-[440px] h-[440px] rounded-full overflow-hidden flex flex-col items-center border-2 border-violet-300/50 shadow-[0_0_90px_rgba(130,90,255,0.45)] cursor-pointer transition duration-300 hover:scale-105"
      style={{
        background:
          "radial-gradient(circle at 30% 30%, #C4B5FD 0%, #8B5CF6 45%, #312E81 100%)",
      }}
    >
      <div className="absolute top-8 left-10 w-32 h-32 rounded-full bg-violet-300/40 blur-3xl" />

      <div className="absolute inset-0 rounded-full border-2 border-white/20" />

      <h2 className="mt-8 w-[85%] text-center text-3xl font-bold text-white leading-tight break-words z-10">
      {feature}
      </h2>

      <div className="mt-6 flex flex-col gap-4 w-[82%] max-w-[320px] z-10">
        {(previewProducts || []).map((product, index) => (
          <div
            key={product.id || index}
            className="flex items-center gap-5 px-5 py-4 rounded-2xl bg-black/20 border border-white/20 shadow-xl transition duration-300 hover:bg-black/30"
          >
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-white flex items-center justify-center flex-shrink-0">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="text-black text-xl font-bold">
                  {product.title.charAt(0)}
                </span>
              )}
            </div>

            <div className="flex flex-col flex-1 overflow-hidden">
              <h3 className="text-xl font-bold text-white truncate">
                {product.title}
              </h3>

              <p className="text-base font-semibold text-yellow-300">
                ⭐ {product.rating} ({product.reviews})
              </p>

              <p className="text-lg font-bold text-white">
                ₹{product.price.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-10 w-[72%] h-10 rounded-full bg-violet-300/20 blur-2xl" />
    </div>
  );
}

export default Planet;