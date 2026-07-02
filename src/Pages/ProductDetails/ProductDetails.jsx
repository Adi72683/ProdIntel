import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import UImage from "../../assets/Images/Universe.jpg";
import LevelUnlockBar from "../../components/organisms/LevelUnlockBar/LevelUnlockBar";
import ProductHero from "../../components/organisms/ProductHero/ProductHero";
import ProductSpecs from "../../components/organisms/ProductSpecs/ProductSpecs";
import ChallengerSection from "../../components/organisms/ChallengerSection/ChallengerSection";
import { useApp } from "../../context/AppContext";

import { generateBattleRoyaleChallengers } from "../../services/geminiService";

function ProductDetails() {

  const navigate = useNavigate();

const {selectedProduct,feature,category,products,challengers,setChallengers,} = useApp();

const product = selectedProduct;

const [loading, setLoading] = useState(false);

const [showChallengers, setShowChallengers] = useState(false);

  async function handleCompare() {

    setLoading(true);

    try {

      const response = await generateBattleRoyaleChallengers(
        product,
        products
      );

      const formatted = [

        {
          type: "Ultimate Rival",
          icon: "🥇",
          product: products.find(
            p => p.id === response.ultimateRival.id
          ),
          reason: response.ultimateRival.reason,
        },

        {
          type: "Closest Rival",
          icon: "⚖️",
          product: products.find(
            p => p.id === response.closestRival.id
          ),
          reason: response.closestRival.reason,
        },

        {
          type: "Value Pick",
          icon: "💰",
          product: products.find(
            p => p.id === response.valuePick.id
          ),
          reason: response.valuePick.reason,
        },

      ].filter(item => item.product);

      setChallengers(formatted);

    } catch (error) {

      console.log("Using fallback challengers...");

      const candidates = products.filter(
        p => p.id !== product.id
      );

      const sorted = [...candidates].sort(
        (a, b) => b.rating - a.rating
      );

      const fallback = [

        {
          type: "Ultimate Rival",
          icon: "🥇",
          product: sorted[0],
          reason:
            "A flagship competitor with excellent overall performance and premium features.",
        },

        {
          type: "Closest Rival",
          icon: "⚖️",
          product: sorted[1],
          reason:
            "Offers a very similar experience but appeals to a slightly different audience.",
        },

        {
          type: "Value Pick",
          icon: "💰",
          product: [...candidates].sort(
            (a, b) => a.price - b.price
          )[0],
          reason:
            "Provides the best balance of features while keeping the price lower.",
        },

      ].filter(item => item.product);

      setChallengers(fallback);

    } finally {

      setLoading(false);

      setShowChallengers(true);

    }

  }

  if (!product) {

    return (

      <div className="min-h-screen flex items-center justify-center bg-black text-white text-3xl">

        Product not found.

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
       <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50">

        <LevelUnlockBar
          currentLevel={3}
          category={category}
          feature={feature}
          products={products}
          product={product}
        />

      </div>

    

      {/* Main Content */}

      <div className="pl-72 relative min-h-screen">

        {/* Page Heading */}

        <h1 className="absolute top-8 left-10 text-6xl font-extrabol tracking-wide z-20">
          <span className="text-white">
            Product
          </span>{" "}
          <span className="text-cyan-400">
            Details
          </span>
        </h1>

        <div className="max-w-7xl mx-auto px-10 pt-36 pb-16">

          <ProductHero
            product={product}
            onCompare={handleCompare}
          />

          <ProductSpecs product={product} />

          {loading && (

            <div className="mt-12 text-center">

              <h2 className="text-3xl font-bold text-violet-300">

               Summoning the worthy Challengers

              </h2>

              <p className="text-slate-300 mt-3">

                Finding the best challengers for Battle Royale.

              </p>

            </div>

          )}

          {!loading && showChallengers && (

            <ChallengerSection
              selectedProduct={product}
              challengers={challengers}
              feature={feature}
              category={category}
            />

          )}

        </div>

      </div>

    </div>

  );

}

export default ProductDetails;