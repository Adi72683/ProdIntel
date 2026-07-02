import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {

  const [category, setCategory] = useState("");
  const [features, setFeatures] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [products, setProducts] = useState([]);

  const [feature, setFeature] = useState("");

  const [selectedProduct, setSelectedProduct] = useState(null);

  const [challengers, setChallengers] = useState([]);

  const [challenger, setChallenger] = useState(null);

  const [battle, setBattle] = useState(null);

  const [battleStarted, setBattleStarted] = useState(false);

  const [round, setRound] = useState(0);

  const [selectedScore, setSelectedScore] = useState(0);

  const [challengerScore, setChallengerScore] = useState(0);

  const [currentChallenger, setCurrentChallenger] = useState(null);

const [challengers, setChallengers] = useState([]);

const [challenger, setChallenger] = useState(null);

const [battle, setBattle] = useState(null);

const [battledOpponents, setBattledOpponents] = useState([]);
  return (

    <AppContext.Provider
      value={{

        category,
        setCategory,

        features,
        setFeatures,

        selectedFeatures,
        setSelectedFeatures,

        products,
        setProducts,

        feature,
        setFeature,

        selectedProduct,
        setSelectedProduct,

        challengers,
        setChallengers,

        challenger,
        setChallenger,

        battle,
        setBattle,

        battleStarted,
        setBattleStarted,

        round,
        setRound,

        selectedScore,
        setSelectedScore,

        challengerScore,
        setChallengerScore,

      }}
    >
      {children}
    </AppContext.Provider>

  );

}

export function useApp() {
  return useContext(AppContext);
}