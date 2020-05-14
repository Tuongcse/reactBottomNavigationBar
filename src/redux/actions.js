import { SET_PRODUCT } from "./actionTypes";

export const setProduct = (products) => {
  return {
    type: SET_PRODUCT,
    payload: {
      products,
    },
  };
};
