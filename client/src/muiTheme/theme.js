import { createTheme } from "@mui/material/styles";

//breakpoint-s min for mobile
//breakpoint-md max for mobile
//breakpoint-xl max container for desktop (starting from 769px)
//xs, lg - optional, extra

const theme = createTheme({
  // Такої property немає у Default Theme
  // container: {
  //   maxWidth: "1200px",
  // },
  // Пропоную залишити стандартні розміри, які вже є у Material UI, і не писати свої
  // breakpoint: {
  //   s: "320px",
  //   xs: "580px",
  //   md: "768px",
  //   lg: "992px",
  //   xl: "1200px",
  // },
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
      //   fontWeight: 400,
      // fontFamily: "Abel",
      // paddingLeft: "40px",
      // paddingRight: "40px",
      // paddingBottom: "15px",
      // paddingTop: "15px",
      color: "#FFFFFF",
      backgroundColor: "#373F41",
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
      color: "#373F41",
    },
    body: {
      fontFamily: ["Mulish", "san-serif"].join(","),
      fontSize: 16,
      fontWeight: 400,
      lineHeight: "25px",
      color: "#373F41",
    },
    subtitle2: {
      fontFamily: ["Mulish", "san-serif"].join(","),
      fontSize: 14,
      fontWeight: 200,
      lineHeight: "15px",
      color: "#8A9394",
    },
  },
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 15,
        },
      },
    },
    MuiButton: {
      stylesOverrides: {
        root: {
          paddingBottom: 15,
          paddingLeft: 40,
          paddingRight: 40,
          paddingTop: 15,
          color: "#373F41",
          backgroundColor: "#FFFFFF",
        },
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
  },

  // Таких properties немає у Default Theme
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
