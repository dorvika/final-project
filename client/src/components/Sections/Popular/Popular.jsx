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
import { Link as LinkRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../../../utils/api";
import {
  CustomButton,
  CustomCardContent,
  CustomGridItem,
  CustomIcon,
  CustomTypography,
} from "./styles";

const Popular = () => {
  const matches = useMediaQuery("(max-width: 899px)");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData("/catalog").then((res) => setCategories(res));
  }, []);

  const shuffledCategories = categories.sort(() => 0.5 - Math.random());
  const categoriesToShow = shuffledCategories.slice(0, 4);

  return (
    <Box
      sx={(theme) => ({
        textAlign: "center",
        [theme.breakpoints.up("md")]: { pb: "80px" },
        [theme.breakpoints.down("md")]: { pb: "20px" },
      })}
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

      <Grid container spacing={10} sx={{ flexGrow: 1 }}>
        {categoriesToShow.map((category, index) => (
          <CustomGridItem
            item
            key={category.id}
            xs={matches ? 12 : index === 0 || index === 3 ? 8 : 4}
          >
            <Link
              component={LinkRouter}
              to={`/catalog?categories=${category.name}&perPage=9&startPage=1`}
            >
              <Card sx={{ maxWidth: "100%" }}>
                <CardMedia
                  component="img"
                  height="340"
                  image={category.imgUrl}
                  alt="popular-img"
                />
                <CustomCardContent sx={{ paddingRight: "20px" }}>
                  <CardContent sx={{ paddingRight: "45px" }}>
                    <CustomTypography variant="p" component="p">
                      {category.name}
                    </CustomTypography>
                    <CustomButton>Shop</CustomButton>
                  </CardContent>
                </CustomCardContent>
              </Card>
            </Link>
          </CustomGridItem>
        ))}
      </Grid>

      <CustomButton sx={{ mt: "30px", padding: "0" }}>
        <Link
          href="/catalog?perPage=9&startPage=1"
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
