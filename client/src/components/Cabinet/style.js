import { Tab } from "@mui/material";
import { styled } from "@mui/material/styles";
import { forwardRef } from "react";
import NumberFormat from "react-number-format";

export const CustomCabinetTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.primary.contrastText,
  alignItems: "flex-start",
  justifyContent: "flex-start",
  fontSize: "20px",
  [theme.breakpoints.up("md")]: { width: "300px" },
  "&.MuiTabs-indicator": { width: "3px", left: 0 },
}));

export const PhoneNumberFormat = forwardRef(function NumberFormatCustom(
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
        return "+38##########";
      default:
        "";
    }
  };
  return (
    <NumberFormat {...other} getInputRef={ref} format={format(props.name)} />
  );
});
