import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SliderWrapper = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",
    padding: "0",
  },
}));
