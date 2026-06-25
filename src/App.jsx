import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import ProductUniverse from "./pages/ProductUniverse/ProductUniverse";
import ProductListing from "./Pages/ProductListing/ProductListing";

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
    </Routes>

  );

}

export default App;