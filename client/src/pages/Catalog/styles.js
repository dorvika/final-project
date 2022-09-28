import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CategoriesMainContainer = styled(Container)(({ theme }) => ({
  marginTop: "30px",
  marginBottom: "80px",
  [theme.breakpoints.down("md")]: {
    marginBottom: "20px",
  },
}));
