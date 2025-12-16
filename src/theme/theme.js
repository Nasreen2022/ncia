import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0b3c5d",
    },
    secondary: {
      main: "#f4a261",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
});

export default theme;
