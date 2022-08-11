import { createTheme } from "@mui/material/styles";

//breakpoint-s min for mobile
//breakpoint-md max for mobile
//breakpoint-xl max container for desktop (starting from 769px)
//xs, lg - optional, extra

const theme = createTheme({
    container: {
      maxWidth: '1200px'
    },
    breakpoint: {
      s:'320px',
      xs:'580px',
      md:'768px',
      lg:'992px',
      xl:'1200px',
    },
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
    },
    headerHeight: {
      mobile: '60px',
      desktop: '72px',
    },
    footerHeight: {
      desktop: '386px'
    },
    navPanelHeight: {
      mobile: '83px'
    },
  });

  export default theme