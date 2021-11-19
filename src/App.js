import { Routes, Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
import Welcome from "./components/Welcome";
function App() {
  return (
    <div>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route
          path="/products/:productId"
          element={<ProductDetail />}
        ></Route>{" "}
        {/* for sub routing */}
        <Route path="/welcome" element={<Welcome />}></Route>
      </Routes>
    </div>
  );
}

export default App;
