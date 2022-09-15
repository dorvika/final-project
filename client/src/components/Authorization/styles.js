import { Tab } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.primary.contrastText,

  width: "222px",
  borderBottom: "1px solid",

  [theme.breakpoints.down("sm")]: {
    width: "145px",
  },
  "&.Mui-selected": {
    borderLeft: "1px solid",
    borderTop: "1px solid",
    borderRight: "1px solid",
    borderBottom: "0",
  },
  "&.MuiTabs-indicator": { height: "0" },
}));
