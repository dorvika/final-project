import { MightLike } from "../../components";
import { EmptyFavorites, FavoritesProductList } from "../../components";
import { useSelector } from "react-redux";
import { Breadcrumbs, Link, Container } from "@mui/material";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.favorites);

  const isFavoritesEmpty = favorites.length !== 0;

  return (
    <>
      <Container>
        <Breadcrumbs>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/favorites">
            Favorites
          </Link>
        </Breadcrumbs>
        {isFavoritesEmpty ? <FavoritesProductList /> : <EmptyFavorites />}
        <MightLike sectionTitle="YOU MIGHT LIKE IT TOO" />
      </Container>
    </>
  );
};

export default Favorites;
