function FeaturePlanet({ feature }) {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full flex items-center justify-center
        border border-white/30 shadow-[0_0_90px_rgba(120,180,255,0.6)] backdrop-blur-md p-6"
      style={{ background:  "radial-gradient(circle at 30% 30%, #C4B5FD 0%, #8B5CF6 45%, #312E81 100%)",}}
    >
      <h2 className=" text-white font-bold text-center leading-tight text-2xl break-words max-w-[140px]">
    {feature}</h2>
    </div>
  );
}

export default FeaturePlanet;