function BattleCard({ product,score,isWinner,}) {
  return (
    
    <div
      className={`w-80 rounded-3xl bg-white/10 backdrop-blur-xl border ${
        isWinner
          ? "border-green-400 shadow-green-400/40"
          : "border-white/20"
      } shadow-xl p-6 transition-all duration-500`}
    >
      
      {product.image?.trim() && (
        <div className="h-56 flex justify-center items-center mb-5">
          <img
            src={product.image}
            alt={product.title}
            className="h-48 object-contain"
          />
        </div>
      )}

      <h2 className="text-2xl font-bold text-white text-center">
        {product.title}
      </h2>

      <p className="text-center text-2xl text-gray-300 mt-2">
        {product.brand}
      </p>

      <div className="flex justify-center gap-6 text-2xl mt-5">
        <span className="text-yellow-300">
          ⭐ {product.rating}
        </span>

        <span className="text-green-300 text-2xl">
          ₹{product.price.toLocaleString()}
        </span>
      </div>

      <div className="mt-8 text-center">
        <h3 className="text-white text-xl">
          Wins
        </h3>

        <p className="text-5xl font-bold text-yellow-400 mt-2">
          {score}
        </p>
      </div>
    </div>
  );
}

export default BattleCard;