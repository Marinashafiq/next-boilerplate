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
  const lang = router.query.lang;

  useEffect(() => {
    setDirection(lang === "en" ? "ltr" : "rtl");
    document.body.style.direction = lang === "en" ? "ltr" : "rtl";
  }, [lang]);

  const theme = createMuiTheme({
    direction: lang === "en" ? "ltr" : "rtl",
    palette: {
      primary: {
        main: "rgba(134, 54, 78, 1)",
      },
      secondary: {
        main: "rgba(234, 134, 133, 1)",
      },
    },
    typography: {
      fontFamily: [
        "Montserrat-Regular",
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
    },
  });

  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StylesProvider>
  );
}

export default Theme;
