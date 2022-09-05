import { FavoritesProductCard, CustomHr } from "./index";
import { Box, Button, Container, Link, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const FavoritesProductList = () => {
  const favorites = useSelector((state) => state.favorites.favorites);
  // console.log(favorites);

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
            }}
          >
            Favorites
          </Typography>
          {/* <Typography
            variant="h4"
            sx={{
              color: "primary.main",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              fontWeight: "600",
            }}
          >
            total usd 490.00
          </Typography> */}
        </Box>
        <CustomHr />
        <Box>
          {favorites.map((product) => {
            return (
              <FavoritesProductCard
                key={product._id}
                id={product._id}
                imageUrls={product.imageUrls}
                name={product.name}
                description={product.description}
                price={product.currentPrice}
                color={product.color}
                size={product.size}
                // // qty={qty}
                itemNo={product.itemNo}
                product={product}
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
          <Link href="/categories" sx={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                justifySelf: "center",
                mt: "50px",
                mb: "80px",
                p: "15px 35px",
                // "&:hover": {
                //   color: "primary.main",
                // },
              }}
            >
              continue shopping
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default FavoritesProductList;
