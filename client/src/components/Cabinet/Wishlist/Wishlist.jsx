import { Box, Divider, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import EmptyFavorites from "../../Favorites/EmptyFavorites.jsx";
import WishProductCard from "./WishProduct.jsx";

const WishList = () => {
  const { favorites } = useSelector((state) => state.favorites);
  const isFavoritesEmpty = favorites.length === 0;

  return (
    <>
      <Typography
        variant="h2"
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: { fontSize: "28px" },
          [theme.breakpoints.down("sm")]: { fontSize: "22px" },
        })}
      >
        My Wish List
      </Typography>

      <Divider />

      {isFavoritesEmpty && (
        <Box
          sx={(theme) => ({
            ml: "150px",
            [theme.breakpoints.down("md")]: { ml: 0 },
          })}
        >
          <EmptyFavorites
            primaryText="your wish list is feeling lonely"
            secondaryText="add some beautiful  new to it"
          />
        </Box>
      )}
      <Stack
        direction="row"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        sx={(theme) => ({
          [theme.breakpoints.up("sm")]: { mt: "30px", maxWidth: "900px" },
          [theme.breakpoints.down("sm")]: {
            mt: "15px",
            maxWidth: "400px",
            minWidth: "250px",
          },
        })}
      >
        {favorites.map((product) => {
          return <WishProductCard key={product.itemNo} product={product} />;
        })}
      </Stack>
    </>
  );
};
export default WishList;
