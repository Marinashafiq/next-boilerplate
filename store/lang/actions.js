import * as types from "./types";

export function setLanguage(payload) {
  return {
    type: types.SET_LANGUAGE,
    payload,
  };
}
