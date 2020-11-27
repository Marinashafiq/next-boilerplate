import React, { useState, useEffect } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import rtl from "jss-rtl";
import { create } from "jss";
import { StylesProvider, jssPreset } from "@material-ui/styles";
import { useRouter } from "next/router";

function Theme({ children }) {
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  const router = useRouter();
  const lang = router.asPath.split("/")[1];

  useEffect(() => {
    document.body.dir = lang === "en" ? "ltr" : "rtl";
    document.body.classList = lang === "en" ? "ltr" : "rtl";
  }, [lang]);

  const theme = createMuiTheme({
    direction: lang === "en" ? "ltr" : "rtl",
    palette: {
      primary: {
        main: "#465a9c",
      },
      secondary: {
        main: "#d35d6e",
      },
    },
    typography: {
      fontFamily: [
        "Nunito-Regular",
        "Almarai-Regular",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      button: {
        fontSize: "1rem",
        fontWeight: 400,
        fontFamily: lang === "en" ? "Nunito-Bold" : "Almarai-Bold",
        textTransform: "capitalize",
      },
    },
    button: {},
  });

  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StylesProvider>
  );
}

export default Theme;
