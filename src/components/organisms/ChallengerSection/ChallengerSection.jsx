import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Trophy, Scale, BadgeDollarSign, Swords } from "lucide-react";
import { useApp } from "../../../context/AppContext";

import { generateBattleRoyale } from "../../../services/geminiService";

function ChallengerSection({
  selectedProduct,
  challengers,
  feature,
  category,
}) {
 const navigate = useNavigate();

const {setBattle,setChallenger} = useApp();
  const [loading, setLoading] = useState(false);

  async function startBattle(challenger) {
    setLoading(true);

    try {
      const battle = await generateBattleRoyale(
  selectedProduct,
  challenger
);

setBattle(battle);

setChallenger(challenger);

navigate("/battle-royale");

    } 
      catch (error) {
      console.error(error);
      alert("Unable to start Battle Royale.");
    } finally {
      setLoading(false);
    }
  }

  if (!challengers.length) return null;

  function getIcon(type) {
    switch (type) {
      case "Ultimate Rival":
        return <Trophy size={42} className="text-yellow-400" />;

      case "Closest Rival":
        return <Scale size={42} className="text-cyan-400" />;

      case "Value Pick":
        return (
          <BadgeDollarSign
            size={42}
            className="text-emerald-400"
          />
        );

      default:
        return null;
    }
  }

  return (
    <div className="mt-16">
      <h2 className="flex items-center gap-3 text-4xl font-bold text-white mb-3">
        <Swords size={42} className="text-violet-400" />
        Choose Your Challenger
      </h2>

      <p className="text-slate-300 text-2xl mb-10">
        Three Worthy Challengers have entered the Arena.
      </p>

      <div className="grid grid-cols-3 gap-8">
        {challengers.map((item) => (
          <div
            key={item.type}
            className="rounded-3xl bg-gradient-to-br from-slate-900/90 to-violet-950/90 border border-violet-400/20 p-7 shadow-2xl transition duration-300 hover:scale-105 flex flex-col"
          >
            {/* Challenger Type */}
            <div className="mb-5">
              {getIcon(item.type)}
            </div>

            <h3 className="text-3xl font-bold text-white">
              {item.type}
            </h3>

            {/* Product Info */}
            <div className="flex items-center gap-5 mt-6 mb-6">
              <div className="w-24 h-24 rounded-2xl bg-white p-2 flex items-center justify-center shadow-lg">
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-1 overflow-hidden">
              <h4 className="mt-5 text-xl font-semibold text-yellow-300 truncate">
              {item.product.title}</h4>


                <p className="text-lg text-slate-300 mt-2">
                  {item.product.brand}
                </p>
              </div>
            </div>

            {/* Rating & Price */}
            <div className="space-y-2">
              <p className="text-xl font-semibold text-amber-400">
                ⭐ {item.product.rating}
              </p>

              <p className="text-2xl font-bold text-emerald-400">
                ₹{item.product.price.toLocaleString()}
              </p>
            </div>

           
            <ul className="list-disc list-inside space-y-3 text-lg leading-8 text-slate-100 flex-1">
            {item.reason.map((point, index) => (
           <li key={index}>{point}</li>
            ))}</ul>

            {/* Battle Button */}
            <button disabled={loading}
            onClick={() => startBattle(item.product)}
            className="mt-10 bg-indigo-600 pt-2 px-8 py-3 rounded-xl text-xl font-semibold text-white transition duration-300"
           >
     

              {loading
                ? "Generating Battle..."
                : "Start Battle"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChallengerSection;