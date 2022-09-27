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
    error: {
      main: "#d32f2f",
      light: "#ef5350",
      dark: "#c62828",
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
      color: "#FFFFFF",
      backgroundColor: "#373F41",
    },
    h2: {
      fontFamily: ["Abel", "san-serif"].join(","),
      fontSize: 32,
      lineHeight: "58px",
      color: "#373F41",
      letterSpacing: "5px",
      [`@media screen and (max-width: 900px)`]: {
        fontSize: 28,
        lineHeight: "38px",
      },
      [`@media screen and (max-width: 600px)`]: {
        fontSize: 24,
        lineHeight: "32px",
      },
      [`@media screen and (max-width: 396px)`]: {
        fontSize: 26,
        lineHeight: "38px",
      },
    },
    h3: {
      fontFamily: ["Mulish", "san-serif"].join(","),
      fontSize: 18,
      fontWeight: 400,
      lineHeight: "15px",
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
        contained: {
          fontFamily: ["Abel", "san-serif"].join(","),
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "32px",
          borderRadius: 4,
          paddingBottom: 15,
          paddingLeft: 40,
          paddingRight: 40,
          paddingTop: 15,
          color: "#FFFFFF",
          backgroundColor: "#373F41",
          border: "1px solid transparent",
          "&:hover": {
            backgroundColor: "transparent",
            color: "#373F41",
            border: "1px solid #373F41",
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
          [`@media screen and (max-width: 389px)`]: {
            fontSize: 11,
          },
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
          [`@media screen and (max-width: 599px)`]: {
            fontSize: 14,
            lineHeight: 18,
          },
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
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: ["Mulish", "san-serif"].join(","),
          fontSize: 18,
          fontWeight: 400,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          fontFamily: ["Mulish", "san-serif"].join(","),
          fontSize: 18,
          fontWeight: 400,
          justifyContent: "center",
          marginTop: "20px",
          textAlign: "center",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: ["Mulish", "san-serif"].join(","),
          fontSize: 12,
          fontWeight: 400,
          position: "absolute",
          top: "34px",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          "&.MuiExpanded": {
            margin: "0",
          },
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
