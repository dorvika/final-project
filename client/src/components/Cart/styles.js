import {Stack} from "@mui/material";
import {styled} from "@mui/material/styles";
import {Box} from "@mui/system";

export const StyledStack = styled(Stack)(({ theme }) => ({

    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
    }
}));

export const StyledBox = styled(Box)(({ theme }) => ({

    [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

    }
}));