import { Container, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ProductCardMainContainer = styled(Container)(({ theme }) => ({
  marginTop: "30px",
  marginBottom: "80px",
  [theme.breakpoints.down("md")]: {
    marginBottom: "40px",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "20px",
  },
}));

export const ProductCardContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: "90px",
  gap: "80px",
  height: "700px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "40px",
    height: "auto",
    marginBottom: "45px",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "20px",
    height: "auto",
    marginBottom: "25px",
  },
}));
