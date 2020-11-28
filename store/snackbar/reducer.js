import * as types from "./types";

export default function snackbar(state = { isOpen: false }, action) {
  switch (action.type) {
    case types.SHOW_SNACKBAR:
      return {
        ...state,
        ...action.payload,
      };
    default:
    return state;
  }
}
