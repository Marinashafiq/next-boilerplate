import { combineReducers } from "redux";
import ProductsReducer from "./products/reducer";

export default combineReducers({
  products: ProductsReducer,
});
