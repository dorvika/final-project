import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
      primary: {
        main: "#373F41",
        contrastText: "#FFFFFF"
      },
      secondary: {
        main: "#FFFFFF",
        contrastText: "#373F41"
      },
      text: {
        primary: "#373F41",
      }
    },
    typography: {
      fontFamily: [
        "Abel",
        "Roboto",
        "Mulish",
        "sans-serif"
      ].join(","),
      fontWeightExtraLight: 200,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 600,
      fontWeightBold: 700,
      button: {
        fontWeight: 400,
        fontFamily: "Abel"
      }
    }
  });

  export default theme