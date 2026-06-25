import OrbitCircle from "../../atoms/OrbitCircle/OrbitCircle";
import ProductSatellite from "../../atoms/ProductSatellite/ProductSatellite";

function Orbit({ radius, product, index }) {

  const angles = [-160, -20, 35, 145, 180];

  const angle = angles[index];

  const radians = (angle * Math.PI) / 180;

  const x = radius * Math.cos(radians);
  const y = radius * Math.sin(radians);

  return (
    <>
      {/* Orbit */}
      <OrbitCircle radius={radius} />

      {/* Product Satellite */}
      <div
        className="absolute"
        style={{
          left: `calc(50% + ${x}px)`,
          top: `calc(50% + ${y}px)`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <ProductSatellite product={product} index={index} />
      </div>
    </>
  );
}

export default Orbit;