import { Box, Container, Slider, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CategoriesMainContainer = styled(Container)(({ theme }) => ({
  marginTop: "30px",
  marginBottom: "80px",
  [theme.breakpoints.down("md")]: {
    marginBottom: "40px",
  },
}));

export const CustomPriceSlider = styled(Slider)({
  height: 2,
  margin: "0px",
  "& .MuiSlider-rail": {
    borderRadius: "0",
    opacity: 1,
  },
  "& .MuiSlider-thumb": {
    height: 10,
    width: 17,
    borderRadius: "0",
  },
});

export const CustomTextField = styled(TextField)({
  width: "80px",
  height: "22px",
  "& .MuiInputBase-root": {
    borderRadius: "0",
  },
  "& .MuiInputBase-input": {
    padding: "0 ",
    textAlign: "center",
    fontSize: "14px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    padding: "0 ",
    textAlign: "center",
  },
});

export const ColorBox = styled(Box)({
  borderRadius: "50%",
  width: "20px",
  height: "20px",
  cursor: "pointer",
  border: "2px solid transparent",
  transition: "border 0.3s ease-in",
});
