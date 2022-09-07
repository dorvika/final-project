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
import { removeFavorite } from "../../store/Favorites/actions";
import { addToCart } from "../../store/Cart/actions";

const FavoritesProductCard = (product) => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.cart.cart);
  const isInBasket = basket.some(
    (basketProducts) => basketProducts.product._id === product.id
  );
  const handleRemoveProduct = () => {
    dispatch(removeFavorite(product));
  };

  const handleBasket = () => {
    dispatch(addToCart(product));
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
          </Stack>
        </Box>
      </Card>
      <CustomHr />
      {/* </Link> */}
    </>
  );
};

export default FavoritesProductCard;
