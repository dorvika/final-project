import {
    Popper,
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

export const CustomPopper = styled(Popper)(() => ({
    height: "600px",
    zIndex: "1000",
    overflowY: "auto",
    overflowX: "none",

    //////////////////// CUSTOM SCROLLER STYLES/////////////////////////////

    // Scrollbar
    '&::-webkit-scrollbar': {
        width: '10px',
    },

    /* Track */
    '&::-webkit-scrollbar-track': {
        background: '#8C8C8C',
        width: '2px',
        border: '3px solid white',
        borderRadius: '10px',
    },

    /* Handle */
    '&::-webkit-scrollbar-thumb': {
        background: '#373F41',
        height: '100px',
        borderRadius: '10px',
    },

    /* Handle on hover */
    '&::-webkit-scrollbar-thumb:hover': {
        background: 'black',
    }
}))



