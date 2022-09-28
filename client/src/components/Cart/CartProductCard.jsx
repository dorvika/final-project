import {
  Box,
  Typography,
  Card,
  CardMedia,
  IconButton,
  TextField,
  Stack,
  CardContent,
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
import {
  removeFromCart,
  addToCart,
  decreaseCartItem,
  changesToCart,
} from "../../store/cart/actions";
import { addFavorite, removeFavorite } from "../../store/favorites/actions";
import theme from "../../muiTheme/theme";
import { StyledBox, StyledStack } from "./styles";

const CartProductCard = ({ cartQuantity, product }) => {
  const {
    imageUrls,
    currentPrice,
    name,
    description,
    color,
    size,
    _id,
    itemNo,
    quantity,
  } = product;

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
  const handleQuantityChange = () => {
    if (quantity >= quantityValue) {
      dispatch(changesToCart(product, quantityValue));
    } else {
      setQuantityValue(quantity);
      dispatch(changesToCart(product, quantity));
    }
  };

  const increaseQuantity = () => {
    if (quantity > quantityValue) {
      setQuantityValue(cartQuantity + 1);
      dispatch(addToCart(product));
    } else {
      return;
    }
  };
  const decreaseQuantity = () => {
    if (quantityValue > 1) {
      setQuantityValue((quantityValue = quantityValue - 1));
      dispatch(decreaseCartItem(product));
    }
  };

  return (
    <>
      <Card
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          mb: "20px",
          mt: "20px",
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
          },
        }}
      >
        <StyledStack direction="row">
          <Link to={`/catalog/${itemNo}`} style={{ textDecoration: "none" }}>
            <CardMedia
              component="img"
              height="200px"
              sx={{
                width: "200px",
                mr: "80px",
                [theme.breakpoints.down("md")]: { mr: "20px", width: "300px" },
                [theme.breakpoints.down("sm")]: { mr: "0", width: "300px" },
              }}
              image={`${imageUrls[0]}`}
            ></CardMedia>
          </Link>
          <CardContent>
            <StyledBox>
              <Link
                to={`/catalog/${itemNo}`}
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
                    mt: "10px",
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
                  textAlign: "center",
                }}
              >
                {description}
              </Typography>
              <Typography variant="h5" sx={{ pb: "10px" }}>
                ${currentPrice}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  [theme.breakpoints.down("sm")]: { flexDirection: "column" },
                }}
              >
                <Box
                  sx={{
                    mr: "80px",
                    [theme.breakpoints.down("sm")]: { mr: "0" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      [theme.breakpoints.down("sm")]: {
                        justifyContent: "center",
                      },
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
                      {color}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      [theme.breakpoints.down("sm")]: {
                        justifyContent: "center",
                      },
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
                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{
                    [theme.breakpoints.down("sm")]: { mb: "10px", mt: "10px" },
                  }}
                >
                  <TextField
                    onBlur={handleQuantityChange}
                    value={quantityValue}
                    type="number"
                    onChange={(e) => {
                      let value = parseInt(e.target.value);
                      if (value <= 0 || isNaN(value)) value = 1;
                      setQuantityValue(value);
                    }}
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
            </StyledBox>
          </CardContent>
        </StyledStack>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-end"
          justifyContent="space-between"
        >
          <IconButton
            onClick={handleRemoveProduct}
            sx={{
              [theme.breakpoints.down("md")]: {
                zIndex: "300",
                position: "absolute",
                top: "0",
                right: "0",
              },
            }}
          >
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
