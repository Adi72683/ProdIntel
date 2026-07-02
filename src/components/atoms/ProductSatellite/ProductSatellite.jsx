import { useNavigate } from "react-router-dom";
import { useApp } from "../../../context/AppContext";

function ProductSatellite({product, index, feature, category, products}) {

  const navigate = useNavigate();

  const { setSelectedProduct } = useApp();

  const isFirst = index === 0;

  function handleProductClick() {

    setSelectedProduct(product);
    navigate("/product-details");

  }

  return (
    <div
      onClick={handleProductClick}
      className={`${isFirst ? "w-32 h-48 p-3" : "w-56 p-4"} rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl transition duration-300 hover:scale-105 cursor-pointer text-white`}>
      <div  className={`${isFirst ? "flex flex-col items-center text-center gap-2" : "flex items-center gap-4"}`}>

       

        <div className={`${isFirst ? "w-12 h-12" : "w-14 h-14"} rounded-xl overflow-hidden bg-white/20 flex items-center justify-center flex-shrink-0`}>
        {product.image ? (
              <img src={product.image} alt={product.title}className="w-full h-full object-cover"/>) :
               (
              <span className={`${isFirst ? "text-xs" : "text-xl"} font-bold text-white`}>{product.brand.charAt(0)}</span>)}
        </div>

        {/* Details */}

        <div className="overflow-hidden">

          <h3
            className={`${isFirst ? "text-xl font-bold leading-4 line-clamp-2 break-words": 
              "text-xl font-bold truncate" }`}
          >
            {product.title}
          </h3>

         <p className={`${isFirst ? "text-lg text-yellow-300 font-bold" : "text-lg text-yellow-300"}`}>
  ⭐     {product.rating}
         </p>
         <p className={`${isFirst ? "text-xl  font-bold" : "text-xl font-bold"}`}>
          ₹{product.price.toLocaleString()}
        </p>

        </div>

      </div>

    </div>
  );
}

export default ProductSatellite;