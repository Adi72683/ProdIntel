import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../atoms/Button/Button";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import FeatureChipList from "../../molecules/FeatureChipList/FeatureChipList";
import { useApp } from "../../../context/AppContext";
import { getProducts } from "../../../services/productService";
import { generateTopFeatures } from "../../../services/geminiService";

import {
  Compass,
  Brain,
  Swords,
} from "lucide-react";

function HeroSection() {

 const [loading, setLoading] = useState(false);
 const {

    category,
    setCategory,

    features,
    setFeatures,

    selectedFeatures,
    setSelectedFeatures,

    products,
    setProducts

} = useApp();

  const navigate = useNavigate();

  async function handleSearch(category) {

    category = category.toLowerCase().trim();

    setCategory(category);
    setLoading(true);

    try {

      const productList = await getProducts(category, category);

      if (!productList || productList.length === 0) {

        setFeatures([]);
        setSelectedFeatures([]);
        setProducts([]);
        return;

      }

      setProducts(productList);

      const response = await generateTopFeatures(
        productList,
        category
      );

      const data = JSON.parse(response);

      setFeatures(data.features);

      setSelectedFeatures([]);

    } catch (error) {

      console.error(error);

      alert(
        "Unable to generate features. Gemini may be busy. Please try again."
      );

      setFeatures([]);
      setSelectedFeatures([]);
      setProducts([]);

    } finally {

      setLoading(false);

    }

  }

  function handleFeatureClick(feature) {

    if (selectedFeatures.includes(feature)) {

      setSelectedFeatures(
        selectedFeatures.filter(
          selected => selected !== feature
        )
      );

    } else {

      setSelectedFeatures([
        ...selectedFeatures,
        feature,
      ]);

    }

  }

  function handleGenerateUniverse() {

    if (!category) {

      alert("Please search a category first.");
      return;

    }

    if (selectedFeatures.length === 0) {

      alert("Please select at least one feature.");
      return;

    }

    navigate("/universe");

  }

  return (

    <div className="flex flex-col items-center text-center mt-1">

      <h2 className="text-emerald-300 text-5xl font-bold mb-8">
        Discover Products Through the Universe
      </h2>

      <p className="w-[90%] mx-auto mb-10 rounded-3xl bg-gradient-to-br from-slate-900/90 to-violet-950/90 border border-violet-400/20 p-8 shadow-2xl text-2xl mb-4">
        Smart discovery. AI insights. Real comparisons.
        <br />
        Find the perfect product that truly fits your needs.
      </p>

      <div className="flex gap-8 mb-16">

        <div className="bg-[#800080] p-8 rounded-3xl w-100 h-60">

          <div className="mb-4 flex justify-center">
            <Compass
              size={52}
              className="text-cyan-400"
              strokeWidth={2.5}
            />
          </div>

          <h3 className="text-4xl font-bold text-yellow-300 mb-3">
            Explore
          </h3>

          <p className="text-gray-400 text-2xl">
            Explore products across the Universe.
          </p>

        </div>

        <div className="bg-[#800080] p-8 rounded-3xl w-100">

          <div className="mb-4 flex justify-center">
            <Swords
              size={52}
              className="text-amber-400"
              strokeWidth={2.5}
            />
          </div>

          <h3 className="text-4xl font-bold text-yellow-300 mb-3">
            Battle Royale
          </h3>

          <p className="text-gray-400 text-2xl">
            Compare products in AI battles.
          </p>

        </div>

        <div className="bg-[#800080] p-8 rounded-3xl w-100">

          <div className="mb-4 flex justify-center">
            <Brain
              size={52}
              className="text-violet-400"
              strokeWidth={2.5}
            />
          </div>

          <h3 className="text-4xl font-bold text-yellow-300 mb-3">
            AI Verdicts
          </h3>

          <p className="text-gray-400 text-2xl">
            Get unbiased AI recommendations.
          </p>

        </div>

      </div>

      <div className="w-3/4 mb-6">

        <SearchBar
          onSearch={handleSearch}
          disabled={loading}
        />

      </div>

      {loading && (

        <p className="text-cyan-300 text-3xl font-semibold mb-6 animate-pulse">

           Callibrating The Product Radar

        </p>

      )}

      <div className="mb-10">

        <FeatureChipList features={features} selectedFeatures={selectedFeatures} onFeatureClick={handleFeatureClick}/>

      </div>

      <Button text=" Generate Universe" onClick={handleGenerateUniverse}/>

    </div>

  );

}

export default HeroSection;