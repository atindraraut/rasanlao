import React from "react";

const Card = () => {
  return (
    <div
      style={{
        width: "150px",
        height: "150px",
        backgroundColor: "#E5E5CB",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
      }}
    >
      <img
        src="https://cdn.shopify.com/s/files/1/0173/7644/4470/products/1_9507ee15-250e-47d7-aacf-47ba482f9b33_grande.jpg?v=1658821152"
        alt="flour"
        style={{width:"100%",height:"90%",borderRadius:'5px'}}
      />
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <h6>Flour(1kg)</h6>
        <p style={{fontSize:"12px"}}>30-40</p>
      </div>
    </div>
  );
};

export default Card;
