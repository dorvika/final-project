import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomSearchTypography = styled(Typography)(() => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  minHeight: "30%",
  textTransform: "uppercase",
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 1.2,
  letterSpacing: "1px",
  fontSize: "26px",
  textAlign: "center",
}));
