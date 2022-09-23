import { TableCell, tableCellClasses, TableRow, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

export const CustomLink = styled(Link)(() => ({
  fontFamily: ["Abel", "san-serif"].join(","),
  textDecoration: "none",
  textTransform: "uppercase",
  fontWeight: 400,
  fontSize: 16,
  lineHeight: "32px",
  borderRadius: 4,
  paddingBottom: 15,
  paddingLeft: 40,
  paddingRight: 40,
  paddingTop: 15,
  margin: "20px auto",
  color: "#FFFFFF",
  backgroundColor: "#373F41",
  border: "1px solid transparent",
  "&:hover": {
    backgroundColor: "transparent",
    color: "#373F41",
    border: "1px solid #373F41",
  },
}));
