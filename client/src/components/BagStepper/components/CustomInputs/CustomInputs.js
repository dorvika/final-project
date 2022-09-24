import { styled, FormControlLabel, Radio, TextField } from "@mui/material";
import NumberFormat from "react-number-format";
import React from "react";

export const CustomLabel = styled(FormControlLabel)(() => ({
  width: "100%",
  height: "113px",
  position: "relative",
  margin: 0,
  border: "1px solid #373F41",
  padding: "20px",
  "& .MuiFormControlLabel-label": {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const CustomRadio = styled(Radio)(({ theme }) => ({
  zIndex: "1",
  padding: 0,
  color: theme.palette.primary,
  "&.Mui-checked": {
    "&, & + .MuiFormControlLabel-label, & + .MuiTypography-root": {
      color: "#ffffff",
    },
  },
  "&.Mui-checked + .MuiFormControlLabel-label": {
    backgroundColor: theme.palette.primary.main,
  },
}));

export const CustomTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-root": {
    backgroundColor: "rgba(255,255,255, .05)",
    color: "#FFFFFF",
  },
  "& .MuiInputLabel-root": {
    color: theme.palette.primary,
    "&.Mui-focused": {
      color: "#ffffff",
    },
  },
}));

export const TextFieldShipping = styled(TextField)(() => ({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    fontFamily: "Mulish",
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #8C8C8C",
    },
  },
}));

export const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(
  props,
  ref
) {
  const { ...other } = props;
  const format = (fieldName) => {
    switch (fieldName) {
      case "cardnumber":
        return "#### #### #### ####";
      case "mmyy":
        return "##/##";
      case "cvv":
        return "###";
      case "phone":
        return "+38(###) ###-##-##";
      default:
        "";
    }
  };
  return (
    <NumberFormat {...other} getInputRef={ref} format={format(props.name)} />
  );
});
