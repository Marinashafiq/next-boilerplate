import { combineReducers } from "redux";
import ProductsReducer from "./products/reducer";
import langReducer from "./lang/reducer";
import loaderReducer from "./loader/reducer";

export default combineReducers({
  products: ProductsReducer,
  lang: langReducer,
  isLoading : loaderReducer
});
