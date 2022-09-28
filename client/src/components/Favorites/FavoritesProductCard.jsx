import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Stack,
  Button,
} from "@mui/material";
import { Close } from "@mui/icons-material/";
import { CustomHr } from "./index";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../../store/favorites/actions";
import { addToCart, removeFromCart } from "../../store/cart/actions";

const FavoritesProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.cart.cart);
  const isInBasket = basket.some(
    (basketProducts) => basketProducts.product._id === product._id
  );

  const handleRemoveProduct = () => {
    dispatch(removeFavorite(product));
  };

  const addToBasket = () => {
    dispatch(addToCart(product));
  };
  const removeFromBasket = () => {
    dispatch(removeFromCart(product._id));
  };

  return (
    <>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: "20px",
          mt: "20px",
        }}
      >
        <Stack
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
              width: "100%",
            },
            [theme.breakpoints.up("sm")]: {
              flexDirection: "row",
              width: "65%",
            },
          })}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Link
              to={`/catalog/${product.itemNo}`}
              style={{ textDecoration: "none" }}
            >
              <CardMedia
                component="img"
                sx={(theme) => ({
                  [theme.breakpoints.up("sm")]: {
                    width: "200px",
                    mr: "20px",
                  },
                  [theme.breakpoints.up("md")]: {
                    width: "200px",
                    mr: "40px",
                  },
                  [theme.breakpoints.up("lg")]: {
                    width: "200px",
                    mr: "80px",
                  },
                })}
                image={`${product.imageUrls[0]}`}
              ></CardMedia>
            </Link>
          </Stack>
          <CardContent>
            <Box>
              <Box>
                <Link
                  to={`/catalog/${product.itemNo}`}
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    variant="h4"
                    fontFamily="Abel"
                    sx={{
                      color: "primary.main",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      pb: "8px",
                    }}
                  >
                    {product.name}
                  </Typography>
                </Link>
                <Typography
                  variant="subtitle2"
                  sx={(theme) => ({
                    [theme.breakpoints.up("sm")]: {
                      color: "primary.main",
                      maxWidth: "380px",
                      pb: "27px",
                      lineHeight: "19px",
                    },
                    [theme.breakpoints.down("sm")]: {
                      color: "primary.main",
                      maxWidth: "380px",
                      pb: "10px",
                      lineHeight: "19px",
                    },
                  })}
                >
                  {product.description}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Box>
                      <Typography variant="h5" sx={{ pb: "10px" }}>
                        ${product.currentPrice}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          textTransform: "uppercase",
                          fontWeight: "400",
                          mr: "10px",
                        }}
                      >
                        Color:
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{ textTransform: "uppercase", fontWeight: "200" }}
                      >
                        {product.color}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography
                        variant="h5"
                        sx={{
                          textTransform: "uppercase",
                          fontWeight: "400",
                          mr: "10px",
                        }}
                      >
                        size:
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{ textTransform: "uppercase", fontWeight: "200" }}
                      >
                        {product.size}
                      </Typography>
                    </Box>
                  </Box>
                  <Stack justifyContent="flex-end" alignItems="flex-end">
                    <IconButton
                      sx={(theme) => ({
                        mb: "10px",
                        p: "0",
                        [theme.breakpoints.up("sm")]: {
                          display: "none",
                        },
                      })}
                      onClick={handleRemoveProduct}
                    >
                      <Close />
                    </IconButton>
                    <Button
                      onClick={isInBasket ? removeFromBasket : addToBasket}
                      variant={isInBasket ? "outlined" : "contained"}
                      sx={(theme) => ({
                        padding: "10px 30px",
                        textAlign: "center",
                        [theme.breakpoints.up("sm")]: { display: "none" },
                      })}
                    >
                      {isInBasket ? "remove from bag" : "add to bag"}
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Stack>
        <Box
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: { display: "none" },
            width: "35%",
          })}
          display="flex"
          flexDirection="column"
          alignItems="flex-end"
          justifyContent="space-between"
        >
          <IconButton onClick={handleRemoveProduct}>
            <Close />
          </IconButton>
          <Button
            onClick={isInBasket ? removeFromBasket : addToBasket}
            variant={isInBasket ? "outlined" : "contained"}
            sx={{ padding: "10px 30px" }}
          >
            {isInBasket ? "remove from bag" : "add to bag"}
          </Button>
        </Box>
      </Card>
      <CustomHr />
    </>
  );
};

export default FavoritesProductCard;
