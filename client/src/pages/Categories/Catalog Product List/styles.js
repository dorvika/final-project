import { Menu, CardContent, PaginationItem } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

export const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 80,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      fontSize: "14px",
      justifyContent: "right",
      color: "#8A9394",
      paddingTop: "4px",
      paddingBottom: "4px",
      minHeight: 0,
      "& .MuiSvgIcon-root": {
        fontSize: 14,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export const CustomCardContent = styled(CardContent)(() => ({
  position: "absolute",
  top: "85%",
  left: "50%",
  width: "max-content",
  transform: "translate(-50%, -50%)",
}));

export const HoverCardContent = styled(CardContent)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(0,0,0,0.5)",
  position: "absolute",
  right: 0,
  bottom: 0,
  left: "10px",
  top: 0,
}));

export const CustomPaginationItem = styled(PaginationItem)(({ theme }) => ({
  margin: "0px 15px",
  "&.MuiButtonBase-root, MuiPaginationItem-root": {
    fontSize: "20px",
    fontWeight: "300",
    lineHeight: "30px",
    fontFamily: "Mulish",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },
    "&.Mui-selected": {
      fontWeight: "700",
      backgroundColor: "rgba(0,0,0,0)",
    },
  },
  [theme.breakpoints.down("md")]: {
    margin: "0px 5px",
  },
  [theme.breakpoints.down("sm")]: {
    margin: "0px",
  },
}));
