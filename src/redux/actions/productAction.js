import { DEMO_LIST } from "../constants/homeConstants";

export const productList = () => {
  console.log("action triggered");
  return {
    type: DEMO_LIST,
    data: { name: "atindra", contact: "36245" },
  };
};
