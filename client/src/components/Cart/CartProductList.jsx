import { CartProductCard, CustomHr } from "./index";
import { Box, Container, Typography, Button } from "@mui/material";
import products from "./ProductsExamples.jsx";
import { Link } from "react-router-dom";

const CartProductList = () => {
  return (
    <>
      <Container>
        <div>breadcrambs</div>
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
          {products.map((product) => {
            return (
              <CartProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.name}
                subtitle={product.subtitle}
                price={product.price}
                color={product.color}
                size={product.size}
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
          <Link to="/cart/checkout" style={{ textDecoration: "none" }}>
            <Button
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
