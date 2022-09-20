import { CartProductCard, CustomHr } from "./index";
import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import theme from "../../muiTheme/theme";
const CartProductList = ({ products }) => {
  const cartTotalSum = () => {
    return products.reduce((sum, cartItem) => {
      return sum + cartItem.product.currentPrice * cartItem.cartQuantity;
    }, 0);
  };

  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "20px",
            mt: "30px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "primary.main",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
                [theme.breakpoints.down("sm")]: {
                    fontSize: "20px"
                }
            }}
          >
            shopping bag
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "primary.main",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              fontWeight: "600",
                [theme.breakpoints.down("sm")]: {
                    fontSize: "20px"
                }
            }}
          >
            total usd {cartTotalSum()}$
          </Typography>
        </Box>
        <CustomHr />
        <Box>
          {products.map((cartItem) => {
            return (
              <CartProductCard
                key={cartItem.product._id}
                cartQuantity={cartItem.cartQuantity}
                product={cartItem.product}
              />
            );
          })}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/cart/checkout" style={{textDecoration:"none"}}>
            <Button
              variant="contained"
              sx={{
                color: "secondary.main",
                justifySelf: "center",
                mt: "50px",
                mb: "80px",
                p: "15px 35px",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              proceed to checkout
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default CartProductList;
