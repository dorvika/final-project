import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Close, ShoppingCartOutlined, ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
// import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../store/cart/actions";
import { removeFavorite } from "../../../store/favorites/actions";

const WishProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.cart.cart);
  const isInBasket = basket.some(
    (basketProducts) => basketProducts.product._id === product._id
  );
  const isAvailable = product.quantity > 0;

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
          border: "1px solid #8C8C8C",
          borderRadius: "4px",
          p: "30px",
          m: "15px ",
          position: "relative",
        }}
      >
        {/* <Stack direction="column" alignItems="flex-end">
          <Box> */}
        <IconButton
          onClick={handleRemoveProduct}
          sx={{ p: "5px", position: "absolute", right: 0, top: 0 }}
        >
          <Close size="small" fontSize="small" />
        </IconButton>
        {/* </Box> */}
        <Link
          to={`/catalog/${product.itemNo}`}
          style={{ textDecoration: "none" }}
        >
          <CardMedia
            height="200px"
            component="img"
            sx={{ width: "200px" }}
            image={`${product.imageUrls[0]}`}
            alt={`${product.name}`}
          />
        </Link>
        {/* </Stack> */}
        <CardContent sx={{ mt: "25px" }}>
          <Typography
            variant="body"
            textTransform="capitalize"
            sx={{ mt: "25px", color: isAvailable ? "primary.main" : "#8A9394" }}
          >
            {product.name}
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mt: "20px" }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: isAvailable ? "primary.main" : "#8A9394",
              }}
            >
              $ {product.currentPrice}
            </Typography>

            <IconButton
              sx={{ color: "primary.main" }}
              onClick={isInBasket ? removeFromBasket : addToBasket}
              disabled={isAvailable ? false : true}
            >
              {isInBasket ? <ShoppingCart /> : <ShoppingCartOutlined />}
            </IconButton>
          </Stack>
          <Typography
            sx={{ lineHeight: "14px" }}
            variant={isAvailable ? "subtitle1" : "subtitle2"}
          >
            {isAvailable ? "Available" : "Unavailable"}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default WishProductCard;
