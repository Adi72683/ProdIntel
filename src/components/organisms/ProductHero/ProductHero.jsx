import {Swords} from "lucide-react";
function ProductHero({ product, onCompare }) {
  return (
    <div className="flex items-center gap-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
      {/* Product Image */}
      {product.image && (
        <div className="w-80 h-80 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg">
          <img
            src={product.image}
            alt={product.title}
            className="w-64 h-64 object-contain"
          />
        </div>
      )}

      <div className="flex-1">
        {/* Product Name */}
        <h1 className="text-5xl text-purple-500 font-extrabold ">
          {product.title}
        </h1>

        {/* Brand */}
        <p className="mt-3 text-3xl tracking-wide text-slate-300">
          {product.brand}
        </p>

        {/* Price */}
        <p className="mt-6 text-4xl font-bold">
          ₹{product.price.toLocaleString()}
        </p>

        {/* Rating */}
        <div className="flex gap-10 mt-6 text-2xl">
          <span className="text-amber-400 font-semibold">
            ⭐ {product.rating}
          </span>

          <span className="text-orange-300 text-2xl">
            {product.reviews} Reviews
          </span>
        </div>

        {/* Compare */}
        <button
  onClick={onCompare}
  className="mt-10 bg-indigo-600 px-8 py-3 rounded-xl text-xl font-semibold text-white transition duration-300 flex items-center justify-center gap-2"
>
  <Swords
    size={25}
    className="text-amber-400"
    strokeWidth={2.5}
  />
  <span>Compare in Battle Royale</span>
</button>
      </div>
    </div>
  );
}

export default ProductHero;