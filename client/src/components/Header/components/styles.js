import { Popper, Input, Box, Dialog } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const HeaderInput = styled(Input)(({ theme }) => ({
  width: "379px",
  padding: "0 0 0 0",
  color: "primary.main",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const CustomDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-container.MuiDialog-scrollPaper": {
    alignItems: "flex-start",
    justifyContent: "flex-end",
    position: "absolute",
    [theme.breakpoints.down("lg")]: {
      right: "15%",
    },
    [theme.breakpoints.up("lg")]: {
      right: "25%",
    },
  },
  "& .MuiPaper-root": {
    marginTop: "75px",
    borderRadius: theme.shape.borderRadius,
    maxWidth: "405px",
  },
}));

export const CustomLink = styled(Link)(() => ({
  textDecoration: "none",
  textTransform: "uppercase",
  textAlign: "center",
  margin: "10px",
  width: "94%",
  fontFamily: ["Abel", "san-serif"].join(","),
  fontSize: 18,
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
}));

export const IconsButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "15%",
  [theme.breakpoints.down("md")]: {
    width: "20%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "40%",
  },
}));

export const HeaderLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "20%",
  [theme.breakpoints.down("md")]: {
    width: "35%",
  },

  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const CustomPopper = styled(Popper)(() => ({
  height: "600px",
  zIndex: "1000",
  overflowY: "auto",
  overflowX: "none",

  //////////////////// CUSTOM SCROLLER STYLES/////////////////////////////

  // Scrollbar
  "&::-webkit-scrollbar": {
    width: "10px",
  },

  /* Track */
  "&::-webkit-scrollbar-track": {
    background: "#8C8C8C",
    width: "2px",
    border: "3px solid white",
    borderRadius: "10px",
  },

  /* Handle */
  "&::-webkit-scrollbar-thumb": {
    background: "#373F41",
    height: "100px",
    borderRadius: "10px",
  },

  /* Handle on hover */
  "&::-webkit-scrollbar-thumb:hover": {
    background: "black",
  },
}));
