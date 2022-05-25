import "../styles/globals.css";
import "../src/font/dana.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "../src/Theme/default";
import { CacheProvider } from "@emotion/react";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
