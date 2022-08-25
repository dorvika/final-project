import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
  Link,
  useMediaQuery,
} from "@mui/material";
import { popularArray } from "./dataPopular";
import { styled } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CustomGridItem = styled(Grid)(() => ({
  position: "relative",
}));

const CustomCardContent = styled(CardContent)(() => ({
  position: "absolute",
  textAlign: "end",
  display: "flex",
  justifyContent: "flex-end",
  textTransform: "uppercase",
  width: "100%",
  bottom: 0,
  backgroundColor: "rgba(255, 255, 255, 0.6)",
}));

const CustomTypography = styled(Typography)(({ theme }) => ({
  letterSpacing: "10px",
  fontSize: "24px",
  lineHeight: "25px",
  fontFamily: "Abel, sans-serif",
  margin: "15px 0 10px 0",
  color: theme.palette.text.primary,
}));

const CustomButton = styled(Button)(({ theme }) => ({
  background: "none",
  fontSize: "16px",
  border: "1px solid #000",
  color: theme.palette.text.primary,
  margin: "0 10px 20px 0",
  padding: "4px 48px",
  transition: "0.3s ease-in",
  "& a": {
    transition: "0.3s ease-in",
  },
  "&:hover": {
    color: theme.palette.primary.contrastText,
    "& > a": {
      color: theme.palette.primary.contrastText,
    },
  },
}));

const CustomIcon = styled(ArrowForwardIosIcon)(() => ({
  position: "absolute",
  right: "34px",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: "15px",
}))

const Popular = () => {
  const matches = useMediaQuery("(max-width: 899px)");

  return (
    <Box
      sx={{
        pb: 40,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          pb: 10,
          textAlign: "center",
          textTransform: "uppercase",
        }}
        color="primary"
      >
        Popular
      </Typography>
      <Grid container spacing={10} sx={{ flexGrow: 1, marginBottom: "30px" }}>
        {popularArray
          .filter((e, count) => count < 4)
          .map(({ id, urlImage, title, xs }) => (
            <CustomGridItem item key={id} xs={matches ? 12 : xs}>
              <Link href="/categories">
                <Card sx={{ maxWidth: "100%" }}>
                  <CardMedia
                    component="img"
                    height="340"
                    image={urlImage}
                    alt="popular-img"
                  />
                  <CustomCardContent sx={{ paddingRight: "20px" }}>
                    <CardContent sx={{ paddingRight: "45px" }}>
                      <CustomTypography variant="p" component="p">
                        {title}
                      </CustomTypography>
                      <CustomButton>
                        Shop
                      </CustomButton>
                    </CardContent>
                  </CustomCardContent>
                </Card>
              </Link>
            </CustomGridItem>
          ))}
      </Grid>
        <CustomButton sx={{ margin: "0", padding: "0" }}>
          <Link href="/categories" sx={{ textDecoration: "none", padding: "4px 65px 4px 48px", position: "relative" }}>
            see all
            <CustomIcon />
          </Link>
        </CustomButton>
    </Box>
  );
};

export default Popular;
