import React from "react";
import Card from "./Card";
import FilterCard from "./FilterCard";

const Products = () => {
  return (
    <div style={{ display: "flex" }}>
      <FilterCard />
      <div
        style={{
          width: "100%",
          height: "80vh",
          display: "grid",
          gridGap: "10px",
          gridTemplateColumns: `repeat(auto-fit, minmax(150px, 1fr))`,
        }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Products;
