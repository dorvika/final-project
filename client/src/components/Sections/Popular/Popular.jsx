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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Preloader } from "../../../pages/Categories";
import { fetchProducts } from "../../../store/Products/actions";
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
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const { products, isLoading, hasError } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    fetchData("/catalog").then((res) => setCategories(res));
  }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const shuffledCategories = categories.sort(() => 0.5 - Math.random());
  const categoriesToShow = shuffledCategories.slice(0, 4);
  const shuffledProducts = products.sort(() => 0.5 - Math.random());

  const uniqProducts = categoriesToShow.map((el) =>
    shuffledProducts.find((product) => product.categories === el.name)
  );

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

      {hasError && (
        <div>
          <p>Ooops, something went wrong</p>
        </div>
      )}
      {isLoading ? (
        <Preloader style={{ marginBottom: "15px" }} />
      ) : (
        <Grid container spacing={10} sx={{ flexGrow: 1 }}>
          {uniqProducts.map((product, index) => (
            <CustomGridItem
              item
              key={product.item}
              xs={matches ? 12 : index === 0 || index === 3 ? 8 : 4}
            >
              <Link
                href={`/catalog?categories=${product.categories}&perPage=9&startPage=1`}
              >
                <Card sx={{ maxWidth: "100%" }}>
                  <CardMedia
                    component="img"
                    height="340"
                    image={product.imageUrls[0]}
                    alt="popular-img"
                  />
                  <CustomCardContent sx={{ paddingRight: "20px" }}>
                    <CardContent sx={{ paddingRight: "45px" }}>
                      <CustomTypography variant="p" component="p">
                        {product.categories}
                      </CustomTypography>
                      <CustomButton>Shop</CustomButton>
                    </CardContent>
                  </CustomCardContent>
                </Card>
              </Link>
            </CustomGridItem>
          ))}
        </Grid>
      )}

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
};;;;;;;;;;;;

export default Popular;
