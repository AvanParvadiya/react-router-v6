import { Routes, Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
import Welcome from "./components/Welcome";
// import SelectSearch from "react-select-search";
import React, { useState } from "react";
import "./components/select-search.css"
import SelectSearch, { fuzzySearch } from "react-select-search";

import "@reach/combobox/styles.css";
function App() {
  const [value, setValue] = useState("");
  const [multipleValues, setMultipleValues] = useState([]);
  const options = [
    {
      name: "Annie Cruz",
      value: "annie.cruz",
    },
    {
      name: "Eli Shelton",
      value: "eli.shelton",
    },
    {
      name: "Loretta Rogers",
      value: "loretta.rogers",
    },
    {
      name: "Lloyd Fisher",
      value: "lloyd.fisher",
    },
    {
      name: "Tiffany Gonzales",
      value: "tiffany.gonzales",
    },
    {
      name: "Eli Shelton",
      value: "eli.shelton",
    },
    {
      name: "Loretta Rogers",
      value: "loretta.rogers",
    },
    {
      name: "Lloyd Fisher",
      value: "lloyd.fisher",
    },
    {
      name: "Tiffany Gonzales",
      value: "tiffany.gonzales",
    },
  ];
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
      <React.Fragment>
        <div style={{ margin: "0 auto", width: 300, marginTop: 100,maxHeight:"20px" }}>
          <SelectSearch 
            
            multiple={false}
            printOptions={"on-focus"}
            closeOnSelect={true}
            options={options}
            value={multipleValues}
            onChange={setMultipleValues}
            search
            filterOptions={fuzzySearch}
            placeholder="Search something"
          />
        </div>
      </React.Fragment>
    </div>
  );
}

export default App;
