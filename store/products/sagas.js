import { call, put, takeLatest } from "redux-saga/effects";
import * as TYPES from "./types";
import * as ACTIONS from "./actions";
import * as API from "./api";

function* getAllProducts() {
  try {
    const response = yield call(API.getProducts());
    yield put(ACTIONS.receiveProducts(response));
  } catch (error) {
    console.log(error);
  }
}

export function* productsSagas() {
  yield takeLatest(TYPES.PRODUCTS_REQUEST, getAllProducts);
}
