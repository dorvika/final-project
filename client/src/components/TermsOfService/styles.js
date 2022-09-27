import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";
import { ListItem } from "@mui/material";

export const CustomListItem = styled(ListItem)(({ theme }) => ({
  textTransform: "uppercase",
  paddingBottom: "25px",
  letterSpacing: "0.04em",
  color: theme.palette.primary.main,
  display: "inline-block",
}));

export const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `0px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

export const AccordionSummary = styled((props) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(5),
  },
}));

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));
