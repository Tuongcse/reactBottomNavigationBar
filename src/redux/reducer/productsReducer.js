import { SET_PRODUCT } from "../actionTypes";

export default function (state = { products: [] }, action) {
  switch (action.type) {
    case SET_PRODUCT:
      const { products } = action.payload;
      return {
        products,
      };
    default:
      return state;
  }
}
