import { call, put, takeLatest } from "redux-saga/effects";
import * as TYPES from "./types";
import * as ACTIONS from "./actions";
import * as API from "./api";
import { dispatchSnackbarSuccess } from "../../utlis/shared";

function* getAllProducts() {
  try {
    const response = yield call(API.getProducts);
    yield put(ACTIONS.receiveProducts(response.data));
    // dispatchSnackbarSuccess("hello")
  } catch (error) {
    console.log(error);
  }
}

function* getProductDetails({ payload }) {
  try {
    const response = yield call(API.getProductDetais, payload);
    yield put(ACTIONS.receiveProductDetails(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* productsSagas() {
  yield takeLatest(TYPES.PRODUCTS_REQUEST, getAllProducts);
  yield takeLatest(TYPES.PRODUCT_DETAILS_REQUEST, getProductDetails);
}
