function FeaturePlanet({ feature }) {
  return (
    <div
      className="absolute left-1/2 top-1/2
      -translate-x-1/2 -translate-y-1/2
      w-64 h-64
      rounded-full
      flex items-center justify-center
      text-white
      text-4xl
      font-bold
      border border-white/30
      shadow-[0_0_90px_rgba(120,180,255,0.6)]
      backdrop-blur-md"
      style={{
        background:
          "radial-gradient(circle at 30% 30%, rgba(255,255,255,.35), rgba(120,80,255,.45) 45%, rgba(50,30,120,.9) 100%)",
      }}
    >
      {feature}
    </div>
  );
}

export default FeaturePlanet;