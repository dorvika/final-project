import {
  Grid,
  Card,
  CardMedia,
  Typography,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { CustomCardContent, HoverCardContent } from "./styles";
import { Link } from "react-router-dom";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { addFavorite, removeFavorite } from "../../../store/favorites/actions";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = ({ image, title, price, size, itemNo, product }) => {
  const [isHover, setIsHover] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const isInFavorites = favorites.some(
    (elem) => elem.itemNo === product.itemNo
  );

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const addToFavorite = () => {
    dispatch(addFavorite(product));
  };

  const removeFromFavorite = () => {
    dispatch(removeFavorite(product));
  };
  return (
    <Grid item xs={12} sm={6} md={4} position="relative" sx={{ mb: "20px" }}>
      <Card onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <CardMedia
          component="img"
          image={`${image}`}
          alt={`${title}`}
        ></CardMedia>
        {isHover ? (
          <HoverCardContent>
            <IconButton
              sx={{ position: "absolute", top: "10px", right: "10px" }}
              onClick={isInFavorites ? removeFromFavorite : addToFavorite}
            >
              {isInFavorites ? (
                <Favorite sx={{ color: "secondary.main" }} />
              ) : (
                <FavoriteBorder sx={{ color: "secondary.main" }} />
              )}
            </IconButton>
            <Typography
              variant="h5"
              color="secondary"
              sx={{ pb: "5px", textTransform: "capitalize" }}
            >
              {title}
            </Typography>
            <Typography
              variant="h6"
              color="secondary"
              sx={{ pb: "15px", textTransform: "capitalize" }}
            >
              size: {size}
            </Typography>
            <Typography
              variant="h2"
              fontWeight="700"
              color="secondary"
              letterSpacing="0"
              lineHeight="25px"
              paddingBottom="20px"
            >
              $ {price}
            </Typography>
            <Stack direction="row" alignItems="center" justifyContent="center">
              <Link
                to={`/catalog/${itemNo}`}
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="outlined"
                  sx={{ p: "10px 35px", lineHeight: "16px" }}
                >
                  buy now
                </Button>
              </Link>
            </Stack>
          </HoverCardContent>
        ) : (
          <CustomCardContent sx={{ backgroundColor: "primary.main" }}>
            <Typography
              sx={{ padding: "4px 8px", textTransform: "capitalize" }}
              variant="h5"
              color="secondary"
            >
              {title}
            </Typography>
          </CustomCardContent>
        )}
      </Card>
    </Grid>
  );
};

export default ProductCard;
