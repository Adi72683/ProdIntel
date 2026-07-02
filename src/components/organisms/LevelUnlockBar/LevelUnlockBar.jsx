import { useNavigate } from "react-router-dom";
import {House,Telescope,Orbit,Smartphone,Swords} from "lucide-react";


function LevelUnlockBar({
  currentLevel,
  category,
  feature,
  products,
  product,
}) {
  const navigate = useNavigate();
  

  const levels = [
  {
    title: "Home",
    icon: <House size={22} />,
    path: "/",
  },
  {
    title: "Explorer",
    icon: <Telescope size={22} />,
    path: "/universe",
    state: {
      category,
      selectedFeatures: feature ? [feature] : [],
      products,
    },
  },
  {
    title: "Orbit",
    icon: <Orbit size={22} />,
    path: "/products",
    state: {
      feature,
      category,
      products,
    },
  },
  {
    title: "Details",
    icon: <Smartphone size={22} />,
    path: "/product-details",
    state: {
      product,
      feature,
      category,
      products,
    },
  },
  {
    title: "Battle",
    icon: <Swords size={22} />,
  },
];

  function handleClick(level, index) {
    if (index > currentLevel) return;
    if (!level.path) return;

    navigate(level.path);
  }

  return (
    <div className="w-52 rounded-3xl bg-black/25 backdrop-blur-xl border border-white/10 p-4">
      <div className="flex flex-col">
        {levels.map((level, index) => (
          <div
            key={level.title}
            className="flex"
          >
            {/* Left Side (Icon + Line) */}
            <div className="flex flex-col items-center">
              <div
                onClick={() => handleClick(level, index)}
                className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl transition duration-300 ${
                  index <= currentLevel
                    ? "cursor-pointer hover:scale-110"
                    : "cursor-not-allowed opacity-40"
                } ${
                  index < currentLevel
                    ? "bg-emerald-500"
                    : ""
                } ${
                  index === currentLevel
                    ? "bg-gradient-to-r from-cyan-400 to-violet-500 animate-pulse"
                    : ""
                } ${
                  index > currentLevel
                    ? "bg-slate-700"
                    : ""
                }`}
              >
                {level.icon}
              </div>

              {index !== levels.length - 1 && (
                <div
                  className={`w-1 h-12 ${
                    index < currentLevel
                      ? "bg-gradient-to-b from-emerald-400 to-cyan-400"
                      : "bg-white/20"
                  }`}
                />
              )}
            </div>

            {/* Right Side */}
            <div
              className="ml-5 mt-2"
              onClick={() => handleClick(level, index)}
            >
              <p
                className={`font-semibold ${
                  index <= currentLevel
                    ? "text-white"
                    : "text-gray-500"
                }`}
              >
                {level.title}
              </p>

              <p className="text-sm text-gray-400">
                {index < currentLevel
                  ? "Completed"
                  : index === currentLevel
                  ? "Current Level"
                  : "Locked"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Progress */}
      <div className="mt-8">
        <div className="flex justify-between text-sm text-gray-300">
        <span>Progress</span>
        <span>{currentLevel * 20}%</span>
        </div>
        <div className="mt-2 h-2 rounded-full bg-white/20">
          <div
            className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
            style={{
               width: `${currentLevel * 20}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default LevelUnlockBar;