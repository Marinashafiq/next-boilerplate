import { combineReducers } from "redux";
import ProductsReducer from "./products/reducer";
import langReducer from "./lang/reducer";
import loaderReducer from "./loader/reducer";
import snackbarReducer from "./snackbar/reducer";

export default combineReducers({
  products: ProductsReducer,
  lang: langReducer,
  isLoading: loaderReducer,
  snackbar: snackbarReducer,
});
