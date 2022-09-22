import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomBox = styled(Box)(({ theme }) => ({
  background:
    "url(https://www.coyuchi.com/media/wysiwyg/Manzanita_A__detail_5253_1_e_1.jpg)",
  width: "100%",
  height: "400px",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: { height: "300px" },
  [theme.breakpoints.down("sm")]: { height: "200px" },
}));

export const CustomImgBox = styled(Box)(({ theme }) => ({
  height: "500px",
  [theme.breakpoints.down("md")]: { height: "400px" },
  [theme.breakpoints.down("sm")]: { height: "350px" },
}));
