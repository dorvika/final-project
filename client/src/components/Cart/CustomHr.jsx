import { styled } from "@mui/material/styles";
import { Divider } from "@mui/material";

const CustomHr = styled(Divider)(({ theme }) => ({
  color: theme.palette.primary.main,
  borderWidth: "1px",
}));

export default CustomHr;
