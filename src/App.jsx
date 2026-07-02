import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductUniverse from "./pages/ProductUniverse/ProductUniverse";
import ProductListing from "./Pages/ProductListing/ProductListing";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import BattleRoyale from "./Pages/BattleRoyale/BattleRoyale";

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/universe"
        element={<ProductUniverse />}
      />
      
      <Route
        path="/products"
        element={<ProductListing />}
      />
      <Route
        path="/product-details"
        element={<ProductDetails />}
       />
      <Route
        path="/battle-royale"
        element={<BattleRoyale />}
      />
    </Routes>

  );

}

export default App;