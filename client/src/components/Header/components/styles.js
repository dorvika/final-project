import {
    Input

} from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeaderInput = styled(Input)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        display: "none"
    }
}))