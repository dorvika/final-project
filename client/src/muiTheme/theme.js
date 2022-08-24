import { createTheme } from "@mui/material/styles";

const theme = createTheme({
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
    neutral: {
      main: "#8C8C8C",
      light: "#DADADA",
    },
  },
  spacing: 2,
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
      [`@media screen and (max-width: 396px)`]: {
        fontSize: 26,
        lineHeight: "38px",
      },
    },
    h4: {
      fontFamily: ["Mulish", "san-serif"].join(","),
      fontSize: 24,
      color: "#FFFFFF",
      [`@media screen and (max-width: 365px)`]: {
        fontSize: 22,
      },
    },
    h5: {
      fontFamily: ["Mulish", "san-serif"].join(","),
      fontSize: 18,
      fontWeight: 600,
      color: "primary.main",
      [`@media screen and (max-width: 365px)`]: {
        fontSize: 16,
      },
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
    body2: {
      fontFamily: ["Roboto", "san-serif"].join(","),
      fontSize: 32,
      fontWeight: 700,
      color: "#FFFFFF",
    },
    subtitle1: {
      fontFamily: ["Mulish", "san-serif"].join(","),
      fontSize: 14,
      fontWeight: 300,
      lineHeight: "20px",
      color: "#373F41",
    },
    subtitle2: {
      fontFamily: ["Mulish", "san-serif"].join(","),
      fontSize: 14,
      fontWeight: 200,
      lineHeight: "15px",
      color: "#8A9394",
    },
    caption: {
      fontFamily: ["Abel", "san-serif"].join(","),
      fontSize: 18,
      fontWeight: 400,
      lineHeight: "32px",
      color: "#FFFFFF",
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
      styleOverrides: {
        root: {
          fontFamily: ["Abel", "san-serif"].join(","),
          fontWeight: 400,
          fontSize: 18,
          lineHeight: "32px",
          borderRadius: 4,
          paddingBottom: 15,
          paddingLeft: 40,
          paddingRight: 40,
          paddingTop: 15,
          color: "#FFFFFF",
          backgroundColor: "#373F41",
          "&:hover": {
            backgroundColor: "transparent",
            color: "#373F41",
          },
        },
        outlined: {
          padding: "10px 20px",
          color: "#373F41",
          backgroundColor: "#FFFFFF",
          border: "1px solid #373F41",
          fontFamily: ["Abel", "san-serif"].join(","),
          fontWeight: 400,
          fontSize: 16,
          "&:hover": {
            backgroundColor: "#373F41",
            color: "#FFFFFF",
          },
        },
        text: {
          backgroundColor: "transparent",
          color: "#373F41",
          padding: "0",
          fontFamily: "Mulish",
          fontSize: "16px",
          letterSpacing: "0.04em",

          textTransform: "capitalize",

          "&:hover": {
            backgroundColor: "transparent",
            fontWeight: "700",
            transition: "0.4s",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: "none",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 0,
          "&:last-child": {
            paddingBottom: 0,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: 5,
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          fontFamily: ["Mulish", "san-serif"].join(","),
          fontSize: 14,
          fontWeight: 400,
          lineHeight: "24px",
          color: "#949697",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          color: "#8C8C8C",
          fontFamily: "Mulish",
          fontSize: 16,
          lineHeight: 24,
          fontWeight: 300,
          padding: "15px 0 2px",
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: "#8C8C8C",
        },
      },
    },
  },
  transitions: {
    duration: {
      standard: "0.5s",
    },
    easing: {
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    },
  },
});

export default theme;
