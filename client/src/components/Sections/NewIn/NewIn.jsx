import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../../store/products/actions";

const CustomTypography = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.down("365")]: {
    padding: 5,
  },
}));
const CustomCardContent = styled(CardContent)(({ theme }) => ({
  position: "absolute",
  left: 50,
  bottom: 56,
  [theme.breakpoints.down("450")]: {
    left: 10,
  },
}));
const CustomGridItem = styled(Grid)(({ theme }) => ({
  position: "relative",
  "&:nth-of-type(odd)": {
    paddingRight: 10,
    [theme.breakpoints.down("md")]: {
      paddingRight: 0,
    },
  },
  "&:nth-of-type(even)": {
    paddingLeft: 10,
    [theme.breakpoints.down("md")]: {
      paddingLeft: 0,
    },
  },
}));

const GridItem = ({ link, image, title, price }) => {
  return (
    <CustomGridItem item md={6} xs={12}>
      <Link to={`/catalog/${link}`}>
        <Card sx={{ maxWidth: "100%" }}>
          <CardMedia component="img" height="545" image={`${image}`} alt="" />
          <CustomCardContent>
            <CustomTypography
              sx={{ padding: "10px 15px", textTransform: "capitalize" }}
              gutterBottom
              variant="h4"
              component="p"
              color="secondary"
            >
              {title}
            </CustomTypography>
            <CustomTypography
              sx={{ padding: "5px 15px" }}
              variant="body2"
              component="span"
              color="secondary"
            >
              ${price}
            </CustomTypography>
          </CustomCardContent>
        </Card>
      </Link>
    </CustomGridItem>
  );
};

const NewIn = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const { products } = useSelector((state) => state.products);
  const shuffledProducts = products.sort(() => 0.5 - Math.random());
  let newInProducts = shuffledProducts.slice(0, 4);

  return (
    <Box
      sx={(theme) => ({
        [theme.breakpoints.up("md")]: {
          pb: "80px",
        },
        [theme.breakpoints.down("md")]: {
          pb: "40px",
        },
      })}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          pb: 15,
          textAlign: "center",
          textTransform: "uppercase",
        }}
        color="primary"
      >
        New In
      </Typography>
      <Grid container sx={{ rowGap: 10 }}>
        {newInProducts.map((product) => {
          return (
            <GridItem
              key={product._id}
              link={product.itemNo}
              image={product.imageUrls[0]}
              title={product.name}
              price={product.currentPrice}
            />
          );
        })}
      </Grid>
    </Box>
  );
};

export default NewIn;
