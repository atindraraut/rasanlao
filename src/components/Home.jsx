import React from "react";
import { useNavigate } from "react-router-dom";
import ImgSlider from "./ImgSlider";
import PopularProducts from "./PopularProducts";

const Home = () => {
  const Navigate = useNavigate();
  return (
    <div style={{ position: "relative", overflowX: "hidden" }}>
      <ImgSlider />
      <PopularProducts />
    </div>
  );
};

export default Home;
