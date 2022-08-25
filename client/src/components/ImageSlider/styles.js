import {
  ArrowBackIosNew,
  ArrowForwardIos,
  FiberManualRecord,
} from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SliderContainer = styled(Box)(({ theme }) => ({
  height: "80vh",
  padding: "10px 0",
  [theme.breakpoints.down("sm")]: {
    height: "50vh",
  },
}));

export const Slider = styled(Box)(({ theme }) => ({
  height: "90%",
  position: "relative",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    height: "100%",
  },
}));

export const Slide = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  transition: "all 1s ease-in",
  width: "100%",
  height: "100%",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  [theme.breakpoints.down("md")]: {
    borderRadius: "0",
  },
}));

export const SlideContent = styled(Box)(({ theme }) => ({
  position: "absolute",
  maxWidth: "35%",
  bottom: "10%",
  left: " 5%",
  [theme.breakpoints.down("md")]: {
    maxWidth: "95%",
    top: "5%",
    left: "2%",
  },
}));

const SlideText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightExtraLight,
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.shape.borderRadius,
  display: "inline-block",
  padding: "5px",
  textShadow: "0px 1px 1px rgba(0, 0, 0, 0.25)",
}));

export const SlideTitle = styled(SlideText)(({ theme }) => ({
  fontSize: "32px",
  lineHeight: "1.2",
  textTransform: "upperCase",
  [theme.breakpoints.down("md")]: {
    fontSize: "26px",
    textAlign: "center",
  },
  [theme.breakpoints.only("xs")]: {
    fontSize: "22px",
  },
}));

export const SlideDescription = styled(SlideText)(({ theme }) => ({
  fontSize: theme.typography.fontSize,
  letterSpacing: "0.02em",
  marginTop: "10px",
  lineHeight: "1.3",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const SlideButton = styled(Button)(({ theme }) => ({
  fontFamily: theme.typography.button.fontFamily,
  fontWeight: theme.typography.fontWeightExtraLight,
  fontSize: theme.typography.fontSize,
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.primary.contrastText,
  borderRadius: theme.shape.borderRadius,
  border: "none",
  boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.45)",
  padding: "12px 25px",
  marginTop: "20px",
  cursor: "pointer",
  textTransform: "upperCase",
  transition: "all 0.5s ease-in",
  "&:hover": {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightExtraLight,
  },
  [theme.breakpoints.down("md")]: {
    marginTop: "15px",
    padding: "10px 15px",
    bottom: "-65%",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "0",
    bottom: "-55%",
  },
}));

export const LeftArrow = styled(ArrowBackIosNew)(({ theme }) => ({
  background: theme.palette.primary.contrastText,
  borderRadius: theme.shape.borderRadius,
  width: "50px",
  height: "85px",
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  cursor: "pointer",
  color: "#8c8c8c",
  zIndex: "1",
  transition: "color 0.3s ease-in",
  left: "-25px",
  "&:hover": {
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const RightArrow = styled(ArrowForwardIos)(({ theme }) => ({
  background: theme.palette.primary.contrastText,
  borderRadius: theme.shape.borderRadius,
  width: "50px",
  height: "85px",
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  cursor: "pointer",
  color: "#8c8c8c",
  zIndex: "1",
  transition: "color 0.3s ease-in",
  right: "-25px",
  "&:hover": {
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const SliderDots = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  color: "#8c8c8c",
  marginTop: "10px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const SliderDot = styled(FiberManualRecord)(({ theme }) => ({
  cursor: "pointer",
  transition: "color 0.3s ease-in",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));
