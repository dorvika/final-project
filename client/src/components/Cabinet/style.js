import { Tab } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomCabinetTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.primary.contrastText,
  alignItems: "flex-start",
  fontSize: "20px",
  padding: "15px 0 15px 0px",

  width: "220px",

  "&.MuiTabs-indicator": { width: "3px", left: 0 },
  [theme.breakpoints.down("sm")]: {
    width: "145px",
  },
}));
