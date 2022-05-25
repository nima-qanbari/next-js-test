import { createTheme } from "@mui/material";

let theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      light: "#ff6161",
      main: "#ff6161",
      dark: "#ff6161",
      contrastText: "#fff",
    },
  },
  typography: {
      fontFamily:"dana", 
  }
});

export { theme };
