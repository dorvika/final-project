import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Link,
  useMediaQuery,
} from "@mui/material";
import { popularArray } from "./dataPopular";
import {
  CustomButton,
  CustomCardContent,
  CustomGridItem,
  CustomIcon,
  CustomTypography,
} from "./styles";

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
              <Link href="/catalog">
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
                      <CustomButton>Shop</CustomButton>
                    </CardContent>
                  </CustomCardContent>
                </Card>
              </Link>
            </CustomGridItem>
          ))}
      </Grid>
      <CustomButton sx={{ margin: "0", padding: "0" }}>
        <Link
          href="/catalog"
          sx={{
            textDecoration: "none",
            padding: "6px 60px 6px 43px",
            position: "relative",
          }}
        >
          see all
          <CustomIcon />
        </Link>
      </CustomButton>
    </Box>
  );
};

export default Popular;
