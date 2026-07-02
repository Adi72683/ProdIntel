import { useState } from "react";
import { useLocation } from "react-router-dom";
import LevelUnlockBar from "../../components/organisms/LevelUnlockBar/LevelUnlockBar";
import UImage from "../../assets/Images/Universe.jpg";
import BattleCard from "../../components/organisms/BattleCard/BattleCard";
import {Swords} from "lucide-react";
import { useApp } from "../../context/AppContext";
import {Trophy} from "lucide-react"
import { generateBattleRoyale } from "../../services/geminiService";

function BattleRoyale() {

  const {
  selectedProduct,
  challenger,
  setChallenger,
  battle,
  setBattle,
  challengers,
  category,
  feature,
  products,
  battleStarted,
  setBattleStarted,
  round,
  setRound,
  selectedScore,
  setSelectedScore,
  challengerScore,
  setChallengerScore,
} = useApp();

  if (!selectedProduct || !challenger || !battle) {

    return (

      <div className="min-h-screen flex items-center justify-center bg-black text-white text-3xl">

        Battle not found.

      </div>

    );

  }

  const currentRound = battle.rounds[round];

  function handleNextRound() {

    if (currentRound.winner === "selected") {

      setSelectedScore(prev => prev + 1);

    } else {

      setChallengerScore(prev => prev + 1);

    }

    if (round < battle.rounds.length - 1) {

      setRound(prev => prev + 1);

    }

  }

  async function battleAgain(item) {

  const confirmBattle = window.confirm(
    "Start a new battle against this challenger?"
  );

  if (!confirmBattle) return;

  const newBattle = await generateBattleRoyale(
    selectedProduct,
    item.product
  );

  setBattle(newBattle);

  setChallenger(item.product);

  setBattleStarted(false);

  setRound(0);

  setSelectedScore(0);

  setChallengerScore(0);
}

  const finished =

    round === battle.rounds.length - 1 &&
    (selectedScore + challengerScore) === battle.rounds.length;

  const winner =
    selectedScore > challengerScore
      ? selectedProduct
      : challenger;

  const remainingChallengers = challengers.filter(
  item => item.product.id !== challenger.id
);    

  // =============================
// START SCREEN
// =============================

if (!battleStarted) {

  return (

    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${UImage})`,
      }}
    >
      
     <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50">
        <LevelUnlockBar
          currentLevel={4}
          category={category}
          feature={feature}
          product={selectedProduct}
          products={[selectedProduct, challenger]}
        />
      </div>
      {/* Heading */}
      <div className="flex flex-col items-center text-center">

        <h1 className="text-7xl font-bold text-white flex items-center gap-5">

          <Swords size={75} className="text-amber-400" strokeWidth={2.5}/> Battle Royale

        </h1>

        <p className="text-3xl text-white mt-4">

           The arena is ready. Five epic rounds await!

        </p>

      </div>

      {/* Product Cards */}
      <div className="flex items-center justify-center gap-28 mt-12">

        <BattleCard
          product={selectedProduct}
          score={0}
        />

        <div className="flex flex-col items-center">
        <h2 className="text-4xl font-extrabold text-red-600 tracking-wider">COSMIC CLASH</h2>
        </div>

        <BattleCard
          product={challenger}
          score={0}
        />

      </div>

      {/* Start Button */}
      <button
        onClick={() => setBattleStarted(true)}
        className="mt-10 bg-indigo-600 px-14 py-3 rounded-xl text-2xl font-semibold text-white transition duration-300"
      >

         Start Battle Royale

      </button>

    </div>

  );

}

  return (

  <div
    className="relative min-h-screen bg-cover bg-center"
    style={{
      backgroundImage: `url(${UImage})`,
    }}
  >
  
    {/* Fixed Mission Progress */}
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50">

      <LevelUnlockBar
        currentLevel={5}
        category={category}
        feature={feature}
        products={products}
        product={selectedProduct}
      />

    </div>

    {/* Main Content */}
    <div className="pl-72">

      <div className="max-w-7xl mx-auto px-10 py-12 ">

        <div className="flex justify-center">
      <h1 className="text-7xl font-bold text-white flex items-center gap-5">
        <Swords size={75} className="text-amber-400" strokeWidth={2.5} />
        Battle Royale
      </h1>
    </div>


        {!finished && (

          <>
          

            <p className="text-center text-gray-300 text-xl mt-3">

              Round {round + 1} / {battle.rounds.length}

            </p>

            <div className="flex justify-center gap-4 mt-8">

              {battle.rounds.map((_, index) => (

                <div
                  key={index}
                  className={`
                    w-10
                    h-3
                    rounded-full
                    ${
                      index <= round
                        ? "bg-yellow-400"
                        : "bg-white/20"
                    }
                  `}
                />

              ))}

            </div>

          </>

        )}

        <div className="flex justify-between mt-16">

          <BattleCard
            product={selectedProduct}
            score={selectedScore}
            isWinner={
              !finished &&
              currentRound.winner === "selected"
            }
          />

        <div className="flex flex-col items-center">
        <h2 className="text-4xl font-extrabold text-red-600 tracking-wider mt-60">COSMIC CLASH</h2>
        </div>

          <BattleCard
            product={challenger}
            score={challengerScore}
            isWinner={
              !finished &&
              currentRound.winner === "challenger"
            }
          />

        </div>

        {!finished && (

          <>

            <div className="mt-14 max-w-3xl mx-auto">

              <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-8">

                <h2 className="text-4xl text-center font-bold text-yellow-400">

                  {currentRound.title}

                </h2>
                <div className="mt-5 flex items-center justify-center gap-3">

                <span className="text-2xl font-semibold text-white">Round Winner:</span>

                <span className="text-2xl font-bold text-emerald-400">
               {currentRound.winner === "selected"? selectedProduct.title: challenger.title}
               </span>

               </div>

                <ul className="list-disc list-inside space-y-2 text-2xl text-gray-200 text-left mt-5">
                {currentRound.reason.map((point, index) => (
                <li key={index}>{point}</li>))}
                </ul>

              </div>

            </div>

            <div className="flex justify-center mt-12">

              <button onClick={handleNextRound}
                className="px-10 py-4 rounded-2xl bg-yellow-400 text-black text-xl font-bold hover:scale-105 transition">
               Next Round →</button>
            </div>
          </>
         )}

        {finished && (

          <div className="mt-16 max-w-4xl mx-auto">

            <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-10">
                
                <div className="flex items-center gap-5">

                

                <div>

                  <h2 className="text-4xl font-bold text-white">

                   The Galactic Council Has Chosen

                  </h2>

                </div>

              </div>

              <hr className="my-8 border-white/20" />

             <h3 className="flex items-center justify-center gap-4 text-5xl text-yellow-400 font-bold">
             <Trophy size={75} className="text-amber-400" strokeWidth={2.5}/>
             <span>{winner.title}</span></h3>

              <p className="text-center text-2xl mt-5 text-white">Final Score{" "}
              <span className={selectedScore > challengerScore? "text-yellow-400": "text-zinc-400"}>
              {selectedScore}</span>

              <span className="text-white"> - </span>

              <span className={challengerScore > selectedScore ? "text-yellow-400": "text-zinc-400"} >
              {challengerScore}</span></p>

              <p className="mt-8 text-2xl text-white leading-9 text-center">

                {battle.summary}

              </p>

              {remainingChallengers.length > 0 && (

  <div className="mt-14">

    <h2 className="text-3xl font-bold text-cyan-300 text-center mb-8">
      ⚔ Continue Tournament
    </h2>

    <div className="grid grid-cols-2 gap-6">

      {remainingChallengers.map((item) => (

        <div
          key={item.product.id}
          className="rounded-3xl bg-slate-900/90 border border-violet-400/20 p-6"
        >

          <div className="flex items-center gap-5">

            <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white">

              <img
                src={item.product.image}
                alt={item.product.title}
                className="w-full h-full object-cover"
              />

            </div>

            <div>

              <h3 className="text-xl font-bold text-yellow-300">
                {item.product.title}
              </h3>

              <p className="text-gray-300">
                {item.product.brand}
              </p>

              <p className="text-cyan-300">
                ⭐ {item.product.rating}
              </p>

            </div>

          </div>

          <button
            onClick={() => battleAgain(item)}
            className="mt-6 w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold transition"
          >
            ⚔ Battle This Challenger
          </button>

        </div>

      ))}

    </div>

  </div>

)}
              {winner.link && (

                <div className="flex justify-center mt-10">

                  <a href={winner.link} target="_blank" rel="noopener noreferrer"
                  className="px-10 py-4 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold hover:scale-105 transition"
                  >
                  🛒 View on {winner.store || "Store"}</a>

                </div>

              )}

            </div>

          </div>

        )}

      </div>

    </div>

  </div>

);

}

export default BattleRoyale;