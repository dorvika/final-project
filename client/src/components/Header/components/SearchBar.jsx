import { Search } from "@mui/icons-material";
import { Box, InputAdornment, Stack, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedProducts } from "../../../store/filters/actions";
import { postSearchQuery } from "../../../utils/api";
import SearchProductCard from "./SearchProductCard.jsx";
import { CustomDialog, CustomLink, HeaderInput } from "./styles";

import { debounce } from "lodash";
import Preloader from "../../../utils/Preloader.jsx";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { searchedProducts } = useSelector((state) => state.filters);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setSearchPhrase(event.target.value);
  };

  const handleFetch = (input) => {
    if (input) {
      setIsLoading(true);
      postSearchQuery("products/search", { query: input }).then(({ data }) => {
        dispatch(setSearchedProducts(data));
        setIsLoading(false);
      });
    }
  };

  const debouncedFetch = useMemo(() => debounce(handleFetch, 300), []);

  const showResults = (e) => {
    if (e.key === "Enter") {
      setOpen(true);
      setSearchPhrase("");
      debouncedFetch(searchPhrase);
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
        handleClose={handleClose}
      />
    ));

  return (
    <>
      <Box position="relative">
        <HeaderInput
          startAdornment={
            <InputAdornment position={"start"}>
              <Search />
            </InputAdornment>
          }
          placeholder="Type and press Enter to search..."
          onChange={handleChange}
          onKeyDown={showResults}
          value={searchPhrase}
        />
        <CustomDialog onClose={handleClose} keepMounted open={open}>
          {isLoading && (
            <Stack
              justifyContent="center"
              sx={{ minWidth: "400px", minHeight: "100px" }}
            >
              <Preloader />
            </Stack>
          )}
          {!isLoading && searchProductCard}
          {searchedProducts.length > 5 && !isLoading && (
            <CustomLink
              to="/search"
              onClick={handleClose}
              style={{ textDecoration: "none" }}
            >{`Show All (${searchedProducts.length})`}</CustomLink>
          )}
          {!searchedProducts.length && !isLoading && (
            <Box p="15px" sx={{ textAlign: "center" }}>
              <Typography
                variant="h2"
                sx={{ lineHeight: 1.2, letterSpacing: 0, fontSize: 24 }}
              >
                Sorry, but nothing was found according to your request. Please,
                try again.
              </Typography>
            </Box>
          )}
        </CustomDialog>
      </Box>
    </>
  );
};

export default SearchBar;
