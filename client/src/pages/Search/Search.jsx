import { Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Search = () => {
  const { searchedProducts } = useSelector((state) => state.filters);
  console.log(searchedProducts);
  return (
    <Container>
      {!searchedProducts.length && <Navigate to="/" />}
      <Typography variant="h2">Search</Typography>
    </Container>
  );
};

export default Search;
