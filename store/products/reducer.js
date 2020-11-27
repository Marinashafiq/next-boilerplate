import * as types from "./types";

export default function products(state = {}, action) {
  switch (action.type) {
    case types.PRODUCTS_RECEIVE:
      return {
        ...state,
        ...action.payload,
      };
    case types.PRODUCT_DETAILS_RECEIVE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
