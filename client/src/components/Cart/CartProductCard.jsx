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
} from "@mui/icons-material/";
import { CustomHr } from "./index";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFromCart, addToCart } from "../../store/Cart/actions";
import { addFavorite } from "../../store/Favorites/actions";

const CartProductCard = ({
  image,
  price,
  title,
  subtitle,
  color,
  size,
  id,
  cartQuantity,
  itemNo,
}) => {
  let [quantityValue, setQuantityValue] = useState(cartQuantity);
  const dispatch = useDispatch();
  // const toogleExpand = () => {
  //   if (expand === "less") {
  //     setExpand("more");
  //   }
  //   if (expand === "more") {
  //     setExpand("less");
  //   }
  // };
  const handleRemoveProduct = () => {
    dispatch(removeFromCart(id));
  };
  const handleAddToFavorites = () => {
    dispatch(
      addFavorite({
        image,
        price,
        title,
        subtitle,
        color,
        size,
        id,
        cartQuantity,
      })
    );
  };
  const handleQuantityChange = (event) => {
    setQuantityValue(event.target.value);
  };

  const increaseQuantity = () => {
    setQuantityValue(cartQuantity + 1);
    dispatch(
      addToCart({
        image,
        price,
        title,
        subtitle,
        color,
        size,
        _id: id,
        cartQuantity,
      })
    );
  };
  const decreaseQuantity = () => {
    if (quantityValue > 1) {
      setQuantityValue((quantityValue = quantityValue - 1));
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
          <Link to={`/catalog/${itemNo}`} style={{ textDecoration: "none" }}>
            <CardMedia
              component="img"
              height="200px"
              sx={{ width: "200px", mr: "80px" }}
              image={`${image}`}
            ></CardMedia>
          </Link>
          <CardContent>
            <Box>
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
                  }}
                >
                  {title}
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
                {subtitle}
              </Typography>
              <Typography variant="h5" sx={{ pb: "10px" }}>
                ${price}
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
                      {size}
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
              add to favorites
            </Typography>
            <IconButton onClick={handleAddToFavorites}>
              <FavoriteBorder />
            </IconButton>
          </Stack>
        </Box>
      </Card>
      <CustomHr />
      {/* </Link> */}
    </>
  );
};

export default CartProductCard;
