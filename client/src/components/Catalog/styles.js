import { Box, FormControlLabel, Slider, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomPriceSlider = styled(Slider)(({ theme }) => ({
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
  [theme.breakpoints.down("md")]: {
    width: "50%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "80%",
  },
  [theme.breakpoints.only("xs")]: {
    width: "90%",
  },
}));

export const CustomTextField = styled(TextField)(({ theme }) => ({
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
  [theme.breakpoints.only("xs")]: {
    width: "70px",
  },
}));

export const ColorBox = styled(Box)({
  borderRadius: "50%",
  width: "20px",
  height: "20px",
  cursor: "pointer",
  border: "2px solid transparent",
  transition: "border 0.3s ease-in",
});

export const CustomFormControlLabel = styled(FormControlLabel)({
  gap: "10px",
  "& .MuiTypography-root.MuiTypography-body1.MuiFormControlLabel-label": {
    fontSize: "14px",
    textTransform: "uppercase",
  },

  "& .MuiButtonBase-root.MuiRadio-root.Mui-checked": {
    color: "#8C8C8C",
  },
  "& .MuiButtonBase-root.MuiRadio-root": {
    padding: "4px",
  },
});
