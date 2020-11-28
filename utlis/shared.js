import store from "../store";
import i18n from "../i18n";
import { setSnackbar } from "../store/snackbar/actions";
import NextI18Next from "next-i18next";

// To show error message that returned from backend
export function dispatchSnackbarError(data) {
  if (data) {
    const errorMsg = data.error.message;
    store.dispatch(
      setSnackbar({
        isOpen: true,
        message: errorMsg,
        type: "error",
      })
    );
  }
}
// To show success message after any success request if needed and rendered from locale files
export function dispatchSnackbarSuccess(message) {
  store.dispatch(
    setSnackbar({
      isOpen: true,
      message,
      type: "success",
    })
  );
}
