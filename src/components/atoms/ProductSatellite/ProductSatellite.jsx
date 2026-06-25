function ProductSatellite({ product, index }) {
  const isFirst = index === 0;

  return (
    <div
      className={`${isFirst ? "w-44 p-3" : "w-56 p-4"} rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl transition duration-300 hover:scale-105 cursor-pointer text-white`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`${isFirst ? "w-10 h-10 text-sm" : "w-14 h-14 text-xl"} rounded-xl bg-white/20 flex items-center justify-center font-bold`}
        >
          {product.brand.charAt(0)}
        </div>

        <div>
          <h3 className={`${isFirst ? "text-sm" : "text-base"} font-bold`}>
            {product.title}
          </h3>

          <p className="text-yellow-300 text-sm">
            ⭐ {product.rating}
          </p>

          <p className="text-gray-300 text-sm">
            ₹{product.price.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductSatellite;