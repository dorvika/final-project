import { CartProductCard, CustomHr } from "./index";
import {
  Box,
  Container,
  Typography,
  Button,
  Breadcrumbs,
  Link,
} from "@mui/material";

// import { Link } from "react-router-dom";

const CartProductList = ({ products }) => {
  return (
    <>
      <Container>
        <Breadcrumbs sx={{ pb: "30px" }}>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/cart">
            Shopping Bag
          </Link>
        </Breadcrumbs>
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
            }}
          >
            total usd 490.00
          </Typography>
        </Box>
        <CustomHr />
        <Box>
          {products.map((cart) => {
            const {
              _id,
              imageUrls,
              name,
              description,
              currentPrice,
              color,
              size,
              qty,
              itemNo,
            } = cart;
            return (
              <CartProductCard
                key={_id}
                id={_id}
                image={imageUrls[0]}
                title={name}
                subtitle={description}
                price={currentPrice}
                color={color}
                size={size}
                qty={qty}
                itemNo={itemNo}
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
          <Link href="/cart/checkout" sx={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                color: "secondary.main",
                justifySelf: "center",
                mt: "50px",
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
