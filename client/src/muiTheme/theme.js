import { createTheme } from "@mui/material/styles";

//breakpoint-s min for mobile
//breakpoint-md max for mobile
//breakpoint-xl max container for desktop (starting from 769px)
//xs, lg - optional, extra

const theme = createTheme({
  container: {
    maxWidth: "1200px",
  },
  breakpoint: {
    s: "320px",
    xs: "580px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
  palette: {
    primary: {
      main: "#373F41",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FFFFFF",
      contrastText: "#373F41",
    },
    text: {
      primary: "#373F41",
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: ["Abel", "Roboto", "Mulish", "sans-serif"].join(","),
    fontSize: 16,
    fontWeightExtraLight: 200,
    fontWeightMedium: 600,
    button: {
      fontWeight: 400,
      fontFamily: "Abel",
      color: "#373F41",
      lineHeight: 32,
    },
    h2: {
      fontFamily: ["Abel", "san-serif"].join(","),
      fontSize: 32,
      lineHeight: "58px",
      color: "#373F41",
      letterSpacing: "5px",
    },
    h4: {
      fontFamily: ["Mulish", "san-serif"].join(","),
      fontSize: 24,
      lineHeight: "38px",
      color: "#FFFFFF",
      letterSpacing: "5px",
    },

    h6: {
      fontFamily: ["Mulish", "san-serif"].join(","),
      fontSize: 16,
      fontWeight: 700,
      lineHeight: "19px",
      marginBottom: "15px",
      color: "#373F41",
    },
    body: {
      fontFamily: ["Mulish", "san-serif"].join(","),
      fontSize: 16,
      fontWeight: 400,
      lineHeight: "25px",
      color: "#373F41",
    },
  },
  // headerHeight: {
  //   mobile: "60px",
  //   desktop: "72px",
  // },
  // footerHeight: {
  //   desktop: "386px",
  // },
  // navPanelHeight: {
  //   mobile: "83px",
  // },
});

export default theme;
