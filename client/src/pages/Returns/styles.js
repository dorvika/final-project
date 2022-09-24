import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomReturnsBox = styled(Box)(() => ({
  height: "400px",
  width: "100%",
  backgroundImage:
    "url(https://res.cloudinary.com/dhk15xaeq/image/upload/v1663955119/Postil/thumb2-black-silk-texture-4k-black-waves-silk-background-silk-waves-texture-silk-background_sin2ps.jpg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 1.2,
  letterSpacing: "1px",
  fontSize: "26px",
  textAlign: "center",
  marginBottom: "20px",
}));

export const CustomReturnsButton = styled(Button)(() => ({
  marginTop: "20px",
  fontFamily: ["Abel", "san-serif"].join(","),
  fontWeight: 400,
  fontSize: 16,
  lineHeight: "32px",
  borderRadius: 4,
  paddingBottom: 15,
  paddingLeft: 40,
  paddingRight: 40,
  paddingTop: 15,
  color: "#FFFFFF",
  backgroundColor: "#282D2F",
  border: "1px solid #FFFFFF",
  "&:hover": {
    backgroundColor: "#444748",
    fontWeight: 400,
  },
}));
