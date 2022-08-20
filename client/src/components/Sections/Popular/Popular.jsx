import {Box, Card, CardContent, CardMedia, Grid, Typography, Button, useMediaQuery} from "@mui/material";
import {popularArray} from "./dataPopular";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CustomGridItem = styled(Grid)(() => ({
  position: "relative",
}))

const CustomCardContent = styled(CardContent)(() => ({
  position: "absolute",
  textAlign: "end",
  display: "flex",
  justifyContent: "flex-end",
  textTransform: "uppercase",
  width: "100%",
  bottom: 0,
  backgroundColor: "rgba(255, 255, 255, 0.6)",
}))

const CustomTypography = styled(Typography)(({theme}) => ({
  letterSpacing: "10px",
  fontSize: "24px",
  lineHeight: "25px",
  fontFamily: "Abel, sans-serif",
  margin: "15px 0 10px 0",
  color: theme.palette.text.primary,
}))

const CustomButton = styled(Button)(({theme}) => ({
  background: "none",
  fontSize: "16px",
  border: "1px solid #000",
  color: theme.palette.text.primary,
  padding: "4px 48px",
  margin: "0 10px 20px 0",
  "&:hover": {
    color: "#fff",
  }
}))

const Popular = () => {
  const matches = useMediaQuery('(max-width: 899px)');

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
                <CustomGridItem item key={id} xs={ matches ? 12 : xs }>
                  <Link to={`/categories/${id}`}>
                    <Card sx={{ maxWidth: "100%" }}>
                      <CardMedia component="img" height="340" image={urlImage} alt="popular-img"/>
                      <CustomCardContent sx={{ paddingRight: "20px" }}>
                        <CardContent sx={{ paddingRight: "45px" }}>
                          <CustomTypography variant="p" component="p">{title}</CustomTypography>
                          <CustomButton>Shop</CustomButton>
                        </CardContent>
                      </CustomCardContent>
                    </Card>
                  </Link>
                </CustomGridItem>
          ))
        }
      </Grid>
      <Link to={"/categories"}>
        <CustomButton sx={{ margin: "0" }} endIcon={<ArrowForwardIosIcon sx={{ width: "14px"}}/>}>
          see all
        </CustomButton>
      </Link>
    </Box>
  )
};

export default Popular;