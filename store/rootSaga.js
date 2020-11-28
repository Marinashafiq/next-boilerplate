import { all } from "redux-saga/effects";
import { productsSagas } from "./products/sagas";

export default function* rootSaga() {
  yield all([productsSagas()]);
}
