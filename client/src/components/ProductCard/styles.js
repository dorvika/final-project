import { Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  LeftArrow,
  RightArrow,
  Slide,
} from "../../components/ImageSlider/styles";

export const ProductSliderContainer = styled(Box)(({ theme }) => ({
  width: "50%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const ProductSlide = styled(Slide)(({ theme }) => ({
  height: "80%",
  position: "relative",
  [theme.breakpoints.down("md")]: {
    borderRadius: theme.shape.borderRadius,
    height: "400px",
  },
  [theme.breakpoints.down("sm")]: {
    borderRadius: theme.shape.borderRadius,
    height: "250px",
  },
}));

export const ArrowLeft = styled(LeftArrow)(({ theme }) => ({
  width: "35px",
  height: "65px",
  left: "-10px",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

export const ArrowRight = styled(RightArrow)(({ theme }) => ({
  width: "35px",
  height: "65px",
  right: "-10px",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

export const ProductInfoContainer = styled(Box)(({ theme }) => ({
  width: "50%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const SocialMediaContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  gap: "15px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
