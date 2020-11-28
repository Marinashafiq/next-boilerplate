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

export function requestProductDetails(payload) {
  return {
    type: types.PRODUCT_DETAILS_REQUEST,
    payload
  };
}

export function receiveProductDetails(payload) {
  return {
    type: types.PRODUCT_DETAILS_RECEIVE,
    payload,
  };
}
