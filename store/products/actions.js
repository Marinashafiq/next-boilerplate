import * as types from "./types";

export function requestProducts() {
  return {
    type: types.PRODUCTS_REQUEST,
  };
}

export function receiveProducts(payload) {
  return {
    type: types.PRODUCTS_RECEIVE,
    payload,
  };
}
