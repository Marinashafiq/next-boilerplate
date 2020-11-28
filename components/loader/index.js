import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./loader.module.scss";

export const Loader = () => {
  return (
    <div
      className={`spinnerContainer d-flex justify-content-center align-items-center ${styles.loader_height}`}
    >
      <CircularProgress color="primary" />
    </div>
  );
};
