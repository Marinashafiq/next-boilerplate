import * as types from "./types";

export default function language(state = "en", action) {
  switch (action.type) {
    case types.SET_LANGUAGE:
      localStorage.setItem("lang", action.payload);
      return action.payload;
    default:
      return state;
  }
}
