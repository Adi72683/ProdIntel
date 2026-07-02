function OrbitCircle({ radius }) {
  return (
    <div
     className="absolute rounded-full border border-white/20 pointer-events-none"
      style={{
        width: radius * 2,
        height: radius * 2,
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}

export default OrbitCircle;