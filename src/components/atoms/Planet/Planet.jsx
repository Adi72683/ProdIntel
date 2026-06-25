import { useNavigate } from "react-router-dom";

function Planet({ feature, category, products = [] }) {

  const navigate = useNavigate();

  function handlePlanetClick() {
    navigate("/products", {
      state: {
        feature,
        category,
      },
    });
  }

  return (
    <div
      onClick={handlePlanetClick}
      className="relative w-[400px] h-[400px] rounded-full overflow-hidden flex flex-col items-center border border-white/30 shadow-[0_0_80px_rgba(120,180,255,0.55)] backdrop-blur-md bg-white/10 cursor-pointer transition duration-300 hover:scale-105"
      style={{
        background:
          "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), rgba(120,80,255,0.45) 45%, rgba(50,30,120,0.85) 100%)",
      }}
    >
      {/* Planet Shine */}
      <div className="absolute top-8 left-10 w-28 h-28 rounded-full bg-white/30 blur-2xl" />

      {/* Outer Rim */}
      <div className="absolute inset-0 rounded-full border-2 border-white/25" />

      {/* Feature */}
      <h2 className="mt-8 text-4xl font-bold text-white z-10">
        {feature}
      </h2>

      {/* Top 2 Products */}
      <div className="mt-8 flex flex-col gap-4 w-[82%] z-10">
        {products.map((product, index) => (
          <div
            key={product.id || index}
            className="flex items-center gap-4 px-4 py-3 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 shadow-lg transition duration-300 hover:bg-white/20"
          >
            {/* Brand Initial */}
            <div className="w-14 h-14 rounded-xl bg-white/25 flex items-center justify-center text-white font-bold text-xl">
              {product.brand.charAt(0)}
            </div>

            {/* Product Details */}
            <div className="flex flex-col flex-1 overflow-hidden">
              <h3 className="text-base font-semibold text-white truncate">
                {product.title}
              </h3>

              <p className="text-sm text-white/80">
                ⭐ {product.rating} ({product.reviews})
              </p>

              <p className="text-sm text-white/70">
                ₹{product.price.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Reflection */}
      <div className="absolute bottom-10 w-[70%] h-10 rounded-full bg-white/10 blur-xl" />
    </div>
  );
}

export default Planet;