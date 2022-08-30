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
            backgroundColor: "#373F41",
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
            backgroundColor: "transparent",
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
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: 0,
         border:"1px solid #373F41",
         padding:"20px",
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
          justifyContent:"center",
          marginTop: "20px",
          textAlign:"center"
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: ["Mulish", "san-serif"].join(","),
          fontSize: 12,
          fontWeight: 400, 
          position:"absolute",
          top:"30px"
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
