import {
    Input,
    Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeaderInput = styled(Input)(({ theme }) => ({
    width: "379px",
    padding: "0 0 0 0",
    color: "primary.main",
    [theme.breakpoints.down("md")]: {
        display: "none"
    }
}))

export const IconsButtonContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "10%",
    [theme.breakpoints.down("md")]: {
        width: "20%"
    },
    [theme.breakpoints.down("sm")]: {
        width: "40%"
    }
}))

export const HeaderLinks = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "20%",
    [theme.breakpoints.down("md")]: {
        width: "35%"
    },

    [theme.breakpoints.down("sm")]: {
        display: "none"
    }
}))


