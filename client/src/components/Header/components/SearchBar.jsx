import { Search } from "@mui/icons-material";
import { Box, InputAdornment, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedProducts } from "../../../store/Filters/actions";
import { postSearchQuery } from "../../../utils/api";
import SearchProductCard from "./SearchProductCard.jsx";
import { CustomDialog, CustomLink, HeaderInput } from "./styles";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { searchedProducts } = useSelector((state) => state.filters);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (searchPhrase) {
      postSearchQuery("products/search", { query: searchPhrase }).then(
        ({ data }) => {
          dispatch(setSearchedProducts(data));
        }
      );
    }
  }, [searchPhrase]);

  const showResults = (e) => {
    if (e.key === "Enter") {
      setOpen(true);
      setSearchPhrase("");
    }
  };

  const searchProductCard = searchedProducts
    ?.slice(0, 3)
    .map(({ itemNo, name, imageUrls, currentPrice, size }) => (
      <SearchProductCard
        key={itemNo}
        id={itemNo}
        name={name}
        image={imageUrls[0]}
        price={currentPrice}
        size={size}
      />
    ));

  return (
    <>
      <HeaderInput
        startAdornment={
          <InputAdornment position={"start"}>
            <Search />
          </InputAdornment>
        }
        placeholder="Type and press Enter to search..."
        onChange={(e) => setSearchPhrase(e.target.value)}
        onKeyDown={showResults}
        value={searchPhrase}
      />
      <CustomDialog onClose={handleClose} open={open}>
        {!searchedProducts.length && (
          <Box p="15px" sx={{ textAlign: "center" }}>
            <Typography
              variant="h2"
              sx={{ lineHeight: 1.2, letterSpacing: 0, fontSize: 24 }}
            >
              Sorry, but nothing was found according to your request. Please,
              try again
            </Typography>
          </Box>
        )}
        {searchProductCard}
        {searchedProducts.length > 5 && (
          <CustomLink
            to="/search"
            onClick={handleClose}
            style={{ textDecoration: "none" }}
          >{`Show All (${searchedProducts.length})`}</CustomLink>
        )}
      </CustomDialog>
    </>
  );
};

export default SearchBar;
