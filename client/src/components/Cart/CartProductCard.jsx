import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  TextField,
  Stack,
} from "@mui/material";
import {
  ExpandMore,
  ExpandLess,
  Close,
  FavoriteBorder,
  Favorite,
} from "@mui/icons-material/";
import { CustomHr } from "./index";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, addToCart, decreaseCartItem } from "../../store/Cart/actions";
import { addFavorite, removeFavorite } from "../../store/Favorites/actions";

const CartProductCard = ({
  cartQuantity,
  product,
}) => {
  const {
    imageUrls,
    currentPrice,
    name,
    description,
    color,
    size,
    _id,
    itemNo} = product
  let [quantityValue, setQuantityValue] = useState(cartQuantity);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const isFavorite = favorites.some((elem) => elem.itemNo === product.itemNo);

  const handleRemoveProduct = () => {
    dispatch(removeFromCart(_id));
  };
  const addToFavorites = () => {
    dispatch(addFavorite(product));
  };

  const removeFromFavorite = () => {
    dispatch(removeFavorite(product));
  };
  const handleQuantityChange = (event) => {
    setQuantityValue(event.target.value);
  };

  const increaseQuantity = () => {
    setQuantityValue(cartQuantity + 1);
    dispatch(
      addToCart(product)
    );
  };
  const decreaseQuantity = () => {
    if (quantityValue > 1) {
      setQuantityValue((quantityValue = quantityValue - 1));
      dispatch(decreaseCartItem(product))
    }
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
        <Stack direction="row">
          <Link to={`/categories/${itemNo}`} style={{ textDecoration: "none" }}>
            <CardMedia
              component="img"
              height="200px"
              sx={{ width: "200px", mr: "80px" }}
              image={`${imageUrls[0]}`}
            ></CardMedia>
          </Link>
          <CardContent>
            <Box>
              <Link
                to={`/categories/${itemNo}`}
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
                  {name}
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
                {description}
              </Typography>
              <Typography variant="h5" sx={{ pb: "10px" }}>
                ${currentPrice}
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
                      {color}
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
                      {size}
                    </Typography>
                  </Box>
                </Box>
                <Stack direction="row" alignItems="center">
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
                </Stack>
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
            <Typography
              variant="h5"
              sx={{ textTransform: "uppercase", fontWeight: 400 }}
            >
              {isFavorite ? "remove from favorites" : "add to favorites"}
            </Typography>
            <IconButton
              onClick={isFavorite ? removeFromFavorite : addToFavorites}
            >
              {isFavorite ? <Favorite /> : <FavoriteBorder />}
            </IconButton>
          </Stack>
        </Box>
      </Card>
      <CustomHr />
    </>
  );
};

export default CartProductCard;
