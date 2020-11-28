import * as types from "./types";

export function setSnackbar(payload) {
  return {
    type: types.SHOW_SNACKBAR,
    payload,
  };
}
