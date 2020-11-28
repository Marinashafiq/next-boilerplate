import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useSelector, useDispatch } from "react-redux";
import { setSnackbar } from "../../store/snackbar/actions";
import { useTranslation } from "../../i18n";
import { ClickAwayListener } from "@material-ui/core";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function MaterialSnackbar(props) {
  const { t } = useTranslation(["locale"]);
  const snackbar = useSelector((state) => state.snackbar);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setSnackbar({ isOpen: false }));
  };
  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Snackbar
        open={snackbar.isOpen}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        key={`bottom,center`}
        onClose={() => handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={snackbar.type}
          className="medium_font"
        >
          <p className="mb-0 mt-2">{t(snackbar.message)}</p>
        </Alert>
      </Snackbar>
    </ClickAwayListener>
  );
}
