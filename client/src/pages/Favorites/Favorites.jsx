import { EmptyFavorites, FavoritesProductList, MightLike } from "../../components";
import { useSelector } from "react-redux";
import { Breadcrumbs, Link, Container } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.favorites);

  const isFavoritesEmpty = favorites.length !== 0;

  return (
    <>
      <Container>
        <Breadcrumbs>
          <Link component={LinkRouter} underline="hover" color="inherit" to="/">
            Home
          </Link>
          <Link component={LinkRouter} underline="hover" color="inherit" to="/favorites">
            Favorites
          </Link>
        </Breadcrumbs>
        {isFavoritesEmpty ? (
          <FavoritesProductList />
        ) : (
          <EmptyFavorites
            primaryText="your favortites feeling lonely add -"
            secondaryText="some beautiful to it"
          />
        )}
        <MightLike
          sectionTitle={
            isFavoritesEmpty ? "YOU MIGHT LIKE IT TOO" : "YOU MIGHT LIKE IT"
          }
        />
      </Container>
    </>
  );
};

export default Favorites;
