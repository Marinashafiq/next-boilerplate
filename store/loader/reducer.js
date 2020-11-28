import * as types from "./types";

export default function loader(state = false, action) {
  switch (action.type) {
    case types.SET_LOADER:
      return action.payload;
    default:
      return state;
  }
}
