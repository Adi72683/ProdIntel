import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../atoms/Button/Button";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import FeatureChipList from "../../molecules/FeatureChipList/FeatureChipList";

import { categoryMap } from "../../../services/productCategories";
import { generateTopFeatures } from "../../../services/geminiService";

function HeroSection() {
  const [features, setFeatures] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const navigate = useNavigate();

  async function handleSearch(category) {
    category = category.toLowerCase();

    setSelectedCategory(category);

    const products = categoryMap[category];

    if (!products) {
      setFeatures([]);
      setSelectedFeatures([]);
      return;
    }

    try {
      const response = await generateTopFeatures(products, category);

      console.log("Gemini response:", response);

      const data = JSON.parse(response);

      console.log("Parsed data:", data);

      setFeatures(data.features);

      
      setSelectedFeatures([]);
    } catch (error) {
      console.error("Gemini Error:", error);

      setFeatures([]);
      setSelectedFeatures([]);
    }
  }

  function handleFeatureClick(feature) {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(
        selectedFeatures.filter(
          (selectedFeature) => selectedFeature !== feature
        )
      );
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  }

  function handleGenerateUniverse() {
    if (!selectedCategory) {
      alert("Please search a category first.");
      return;
    }

    if (selectedFeatures.length === 0) {
      alert("Please select at least one feature.");
      return;
    }

    navigate("/universe", {
     state: {
     category: selectedCategory,
     selectedFeatures,
     products: categoryMap[selectedCategory],
    },
   });
  }

  return (
    <div className="flex flex-col items-center text-center">

      <h2 className="text-4xl font-bold mb-4">
        Discover Products Through the Universe
      </h2>

      <p className="text-yellow-300 text-2xl max-w-xl mb-10">
        Smart discovery. AI insights. Real comparisons.
        Find the perfect product that truly fits your needs.
      </p>

      {/* Feature Cards */}

      <div className="flex gap-8 mb-16">

        <div className="bg-[#800080] p-8 rounded-3xl w-100 h-50">
          <div className="text-5xl mb-4">🪐</div>

          <h3 className="text-4xl font-bold text-yellow-300 mb-3">
            Explore
          </h3>

          <p className="text-gray-400 text-lg">
            Explore products across the Universe.
          </p>
        </div>

        <div className="bg-[#800080] p-8 rounded-3xl w-100">
          <div className="text-5xl mb-4">⚔️</div>

          <h3 className="text-4xl font-bold text-yellow-300 mb-3">
            Battle Royale
          </h3>

          <p className="text-gray-400 text-lg">
            Compare products in AI battles.
          </p>
        </div>

        <div className="bg-[#800080] p-8 rounded-3xl w-100">
          <div className="text-5xl mb-4">🤖</div>

          <h3 className="text-4xl font-bold text-yellow-300 mb-3">
            AI Verdicts
          </h3>

          <p className="text-gray-400 text-lg">
            Get unbiased AI recommendations.
          </p>
        </div>

      </div>

      {/* Search */}

      <div className="w-3/4 mb-8">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Dynamic Feature Planets */}

      <div className="mb-10">
        <FeatureChipList
          features={features}
          selectedFeatures={selectedFeatures}
          onFeatureClick={handleFeatureClick}
        />
      </div>

      <Button
        text="🚀 Generate Universe"
        onClick={handleGenerateUniverse}
      />

    </div>
  );
}

export default HeroSection;