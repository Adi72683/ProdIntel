import { useState } from "react";
import { Info } from "lucide-react";

function OrbitInfo({ feature }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-28 right-8 z-50">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-lg hover:bg-white/20 transition"
      >
        <Info size={20} />
        Orbit Logic
      </button>

      {/* Expandable Card */}
      <div
        className={`absolute right-0 mt-4 w-80 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-2">
            🛰 Orbit Logic
          </h2>

          <p className="text-sm text-gray-300 mb-5">
            Products are ranked based on the selected feature.
          </p>

          <div className="mb-5">
            <p className="text-gray-400 text-sm">
              Current Feature
            </p>

            <p className="text-yellow-300 text-xl font-semibold">
              {feature}
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-white">🥇 Orbit 1</span>
              <span className="text-green-400">Best Match</span>
            </div>

            <div className="flex justify-between">
              <span className="text-white">🥈 Orbit 2</span>
              <span className="text-blue-300">Excellent</span>
            </div>

            <div className="flex justify-between">
              <span className="text-white">🥉 Orbit 3</span>
              <span className="text-orange-300">Very Good</span>
            </div>

            <div className="flex justify-between">
              <span className="text-white">⭐ Orbit 4</span>
              <span className="text-purple-300">Good</span>
            </div>

            <div className="flex justify-between">
              <span className="text-white">🌙 Orbit 5</span>
              <span className="text-gray-300">Average</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrbitInfo;