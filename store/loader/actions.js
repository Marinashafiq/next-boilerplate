import * as types from "./types";

export function setLoader(payload) {
  return {
    type: types.SET_LANGUAGE,
    payload,
  };
}
