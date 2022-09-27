import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

export const CustomTitle = styled(Typography)(({ theme }) => ({
  letterSpacing: "5px",
  color: "#373F41",
  fontWeight: "400",
  fontSize: "32px",
  lineHeight: "45px",
  textAlign: "center",
  textTransform: "uppercase",
  marginBottom: "10px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
  },
}));

export const CustomBox = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "80px",
}));

export const CustomSliderBox = styled(Box)(() => ({
  width: "100%",
  height: "380px",
  position: "relative",
}));

export const CustomLeftIcon = styled(ArrowBackIosNew)(({ theme }) => ({
  left: "-16px",
  top: "50%",
  backgroundColor: theme.palette.primary.contrastText,
  color: theme.palette.primary.main,
  borderRadius: "2px",
  position: "absolute",
  transform: "translate(0, -50%)",
  width: "35px",
  height: "65px",
  zIndex: "3",
}));

export const CustomRightIcon = styled(ArrowForwardIos)(({ theme }) => ({
  right: "-16px",
  top: "50%",
  backgroundColor: theme.palette.primary.contrastText,
  color: theme.palette.primary.main,
  borderRadius: "2px",
  position: "absolute",
  transform: "translate(0, -50%)",
  width: "35px",
  height: "65px",
  zIndex: "3",
}));

export const CustomSlider = styled(Typography)(() => ({
  width: "100%",
  whiteSpace: "nowrap",
  overflow: "scroll",
  padding: "0 4px",
  scrollBehavior: "smooth",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    width: "0",
    height: "0",
  },
  "& > *": {
    paddingRight: "20px",
  },
  "& > :last-child": {
    paddingRight: "0",
  },
}));

export const CustomItem = styled(Typography)(() => ({
  width: "380px",
  height: "380px",
  display: "inline-block",
  borderRadius: "10px",
  position: "relative",
}));

export const CustomContent = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  padding: "10px",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  width: "100%",
}));
