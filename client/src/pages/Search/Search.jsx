import { Box, Container, Stack, Typography } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import { useSelector } from "react-redux";
import { CustomSearchTypography } from "./styles";
import { Link } from "react-router-dom";

const Search = () => {
  const { searchedProducts } = useSelector((state) => state.filters);
  const searchProductsToShow = searchedProducts.map((item) => (
    <div
      key={item.itemNo}
      style={{
        position: "relative",
        boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Link to={`/catalog/${item.itemNo}`}>
        <CustomSearchTypography variant="h2">
          <div>{item.name}</div>
          <div style={{ fontSize: "32px" }}>${item.currentPrice}</div>
          <div>{item.size}</div>
        </CustomSearchTypography>

        <img
          src={`${item.imageUrls[0]}`}
          srcSet={`${item.imageUrls[0]}`}
          alt={item.name}
          loading="lazy"
          style={{
            display: "block",
            width: "100%",
          }}
        />
      </Link>
    </div>
  ));

  return (
    <Container sx={{ mb: "10px" }}>
      {!searchedProducts.length && (
        <Stack justifyContent="center" sx={{ minHeight: "450px" }}>
          <Typography variant="h2" textAlign="center" marginTop="-60px">
            Sorry, but nothing was found according to your request.
            <div>Please, try again.</div>
          </Typography>
        </Stack>
      )}
      <Box sx={{ width: "100%" }}>
        <Masonry columns={3} spacing={6}>
          {searchProductsToShow}
        </Masonry>
      </Box>
    </Container>
  );
};

export default Search;
