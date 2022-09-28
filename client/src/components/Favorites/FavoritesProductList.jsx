import { FavoritesProductCard, CustomHr } from "./index";
import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const FavoritesProductList = () => {
  const favorites = useSelector((state) => state.favorites.favorites);

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
        </Box>
        <CustomHr />
        <Box>
          {favorites.map((product) => {
            return <FavoritesProductCard key={product._id} product={product} />;
          })}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            to="/catalog?perPage=9&startPage=1"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              sx={(theme) => ({
                justifySelf: "center",

                p: "15px 35px",
                [theme.breakpoints.up("md")]: {
                  mt: "50px",
                  mb: "80px",
                },
                [theme.breakpoints.down("md")]: {
                  mt: "30px",
                  mb: "30px",
                },
              })}
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
