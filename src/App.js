import React from "react";
import { useDispatch } from "react-redux";
import { productList } from "./redux/actions/productAction";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";

function App() {
  //const dispatch = useDispatch();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" exact element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
