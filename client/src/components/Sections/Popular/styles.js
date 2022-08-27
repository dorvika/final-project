import {styled} from "@mui/material/styles";
import {Button, CardContent, Grid, Typography} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const CustomGridItem = styled(Grid)(() => ({
  position: "relative",
}));

export const CustomCardContent = styled(CardContent)(() => ({
  position: "absolute",
  textAlign: "end",
  display: "flex",
  justifyContent: "flex-end",
  textTransform: "uppercase",
  width: "100%",
  bottom: 0,
  backgroundColor: "rgba(255, 255, 255, 0.6)",
}));

export const CustomTypography = styled(Typography)(({ theme }) => ({
  letterSpacing: "10px",
  fontSize: "24px",
  lineHeight: "25px",
  fontFamily: "Abel, sans-serif",
  margin: "15px 0 10px 0",
  color: theme.palette.text.primary,
}));

export const CustomButton = styled(Button)(({ theme }) => ({
  background: "none",
  border: "1px solid #000",
  borderRadius: "4px",
  color: theme.palette.text.primary,
  margin: "0 10px 20px 0",
  textTransform: "uppercase",
  padding: "4px 40px",
  fontWeight: "400",
  transition: "0.3s ease-in",
  "& a": {
    transition: "0.3s ease-in",
  },
  "&:hover": {
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main,
    fontWeight: "400",
    "& > a": {
      color: theme.palette.primary.contrastText,
    },
  },
}));

export const CustomIcon = styled(ArrowForwardIosIcon)(() => ({
  position: "absolute",
  right: "30px",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: "15px",
}))