import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  // TextField,
  Stack,
  Button,
} from "@mui/material";
import {
  // ExpandMore,
  // ExpandLess,
  Close,
  // FavoriteBorder,
} from "@mui/icons-material/";
import { CustomHr } from "./index";
// import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { removeFromCart } from "../../store/Cart/actions";
import { removeFavorite } from "../../store/Favorites/actions";
import { addToCart } from "../../store/Cart/actions";
// import { addFavorite } from "../../store/Favorites/actions";

const FavoritesProductCard = (product) => {
  // console.log("product card product", product);
  // let [quantityValue, setQuantityValue] = useState(qty);
  // const [expand, setExpand] = useState("less");
  // const isExpandLess = expand === "less";
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.cart.cart);
  const isInBasket = basket.some(
    (basketProduct) => basketProduct.id === product.id
  );
  console.log(isInBasket);
  // console.log("cart", favorites);
  // const toogleExpand = () => {
  //   if (expand === "less") {
  //     setExpand("more");
  //   }
  //   if (expand === "more") {
  //     setExpand("less");
  //   }
  // };
  const handleRemoveProduct = () => {
    // console.log("remove product", product.id);
    dispatch(removeFavorite(product));
  };

  const handleBasket = () => {
    console.log("product from favorittess tto bag", product);
    dispatch(addToCart(product));
  };
  // const handleAddToFavorites = () => {
  //   dispatch(addFavorite(product));
  // };
  // const handleQuantityChange = (event) => {
  //   setQuantityValue(event.target.value);
  //   console.log(quantityValue);
  // };

  // const increaseQuantity = () => {
  //   setQuantityValue((quantityValue = quantityValue + 1));
  // };
  // const decreaseQuantity = () => {
  //   if (quantityValue > 1) {
  //     setQuantityValue((quantityValue = quantityValue - 1));
  //   }
  // };
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
        <Stack direction="row">
          <Link
            to={`/categories/${product.itemNo}`}
            style={{ textDecoration: "none" }}
          >
            <CardMedia
              component="img"
              height="200px"
              sx={{ width: "200px", mr: "80px" }}
              image={`${product.imageUrls[0]}`}
            ></CardMedia>
          </Link>
          <CardContent>
            <Box>
              <Link
                to={`/categories/${product.itemNo}`}
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
                sx={{
                  color: "primary.main",
                  maxWidth: "380px",
                  pb: "27px",
                  lineHeight: "19px",
                }}
              >
                {product.description}
              </Typography>
              <Typography variant="h5" sx={{ pb: "10px" }}>
                {product.currentPrice}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ mr: "80px" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
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
                    {/* <IconButton onClick={toogleExpand} sx={{ padding: 0 }}>
                      {isExpandLess ? (
                        <ExpandLess size="small" />
                      ) : (
                        <ExpandMore />
                      )}
                    </IconButton> */}
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
                    {/* <IconButton onClick={toogleExpand} sx={{ padding: 0 }}>
                      {isExpandLess ? (
                        <ExpandLess size="small" />
                      ) : (
                        <ExpandMore />
                      )}
                    </IconButton> */}
                  </Box>
                </Box>
                {/* <Stack direction="row" alignItems="center">
                  <TextField
                    value={quantityValue}
                    onChange={handleQuantityChange}
                    style={{ width: "50px" }}
                    size="small"
                  ></TextField>
                  <Stack>
                    <IconButton
                      variant="outlined"
                      onClick={increaseQuantity}
                      sx={{ padding: 0 }}
                    >
                      <ExpandLess fontSize="small" />
                    </IconButton>

                    <IconButton onClick={decreaseQuantity} sx={{ padding: 0 }}>
                      <ExpandMore sx={{ border: "1px" }} fontSize="small" />
                    </IconButton>
                  </Stack>
                </Stack> */}
              </Box>
            </Box>
          </CardContent>
        </Stack>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-end"
          justifyContent="space-between"
        >
          <IconButton onClick={handleRemoveProduct}>
            <Close />
          </IconButton>
          <Stack direction="row" alignItems="center">
            <Button
              onClick={handleBasket}
              variant={isInBasket ? "outlined" : "contained"}
              disabled={isInBasket ? true : false}
              sx={{ padding: "10px 30px" }}
            >
              {isInBasket ? "in bag" : "add to bag"}
            </Button>
            {/* <Typography
              variant="h5"
              sx={{ textTransform: "uppercase", fontWeight: 400 }}
            >
              add to favorites
            </Typography> */}
            {/* <IconButton onClick={handleAddToFavorites}>
              <FavoriteBorder />
            </IconButton> */}
          </Stack>
        </Box>
      </Card>
      <CustomHr />
      {/* </Link> */}
    </>
  );
};

export default FavoritesProductCard;
