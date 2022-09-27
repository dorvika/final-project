import {
  Add,
  Remove,
  FacebookOutlined,
  Twitter,
  Instagram,
  FavoriteBorder,
  Favorite,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import { ProductInfoContainer, SocialMediaContainer } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/cart/actions";
import { fetchData } from "../../utils/api";
import { addFavorite, removeFavorite } from "../../store/favorites/actions";

const ProductInfo = ({
  name,
  id,
  color,
  size,
  currentPrice,
  description,
  product,
}) => {
  const [expanded, setExpanded] = useState("panel1");
  const [colors, setColors] = useState([]);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const cart = useSelector((state) => state.cart.cart);
  const isFavorite = favorites.some((elem) => elem.itemNo === product.itemNo);
  const isCart = cart.some((elem) => elem.product._id === product._id);
  const matches = useMediaQuery("(max-width:425px)");
  
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const addToBag = () => {
    dispatch(addToCart(product));
  };
  const removeFromBag = () => {
    dispatch(removeFromCart(product._id));
  };
  const addToFavorite = () => {
    dispatch(addFavorite(product));
  };

  const removeFromFavorite = () => {
    dispatch(removeFavorite(product));
  };

  useEffect(() => {
    fetchData("/colors").then((result) => setColors(result));
  }, []);

  const colorCssValue = colors?.filter(
    (colorFromDB) => colorFromDB.name.toLowerCase() === color.toLowerCase()
  );
  
  return (
    <ProductInfoContainer>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          variant="h2"
          sx={() => ({
            textTransform: "uppercase",
          })}
        >
          {name}
        </Typography>
        <SocialMediaContainer>
          <Link target="_blank" href="https://facebook.com">
            <FacebookOutlined color="primary" />
          </Link>
          <Link target="_blank" href="https://twitter.com">
            <Twitter color="primary" />
          </Link>
          <Link target="_blank" href="https://instagram.com">
            <Instagram color="primary" />
          </Link>
        </SocialMediaContainer>
      </Stack>
      <Typography variant="subtitle2" component="p" marginTop="10px">
        PRODUCT ID: {id}
      </Typography>
      <Stack
        direction="row"
        gap="10px"
        alignItems="center"
        sx={(theme) => ({
          [theme.breakpoints.up("md")]: { mt: "25px", mb: "10px" },
          [theme.breakpoints.down("md")]: { mt: "15px", mb: "5px" },
        })}
      >
        <Typography variant="body" component="p">
          COLOR :
        </Typography>
        {colorCssValue.length > 0 && (
          <Box
            sx={{
              backgroundColor: colorCssValue[0].cssValue,
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              border: "1px solid transparent",
              borderColor: "primary.main",
            }}
          ></Box>
        )}
      </Stack>
      <Stack
        direction="row"
        gap="10px"
        alignItems="center"
        sx={(theme) => ({
          [theme.breakpoints.up("md")]: { mt: "25px", mb: "10px" },
          [theme.breakpoints.down("md")]: { m: 0 },
        })}
      >
        <Typography variant="body" component="p">
          SIZE :
        </Typography>
        <Typography
          variant="body"
          component="span"
          sx={{
            textTransform: "uppercase",
          }}
        >
          {size}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        gap="10px"
        alignItems="center"
        sx={(theme) => ({
          [theme.breakpoints.up("md")]: { mt: "20px", mb: "10px" },
          [theme.breakpoints.down("md")]: { mt: "10px", mb: "10px" },
        })}
      >
        <Typography variant="body" component="p">
          IN STOCK :
        </Typography>
        <Typography
          variant="body"
          component="span"
          sx={{
            textTransform: "uppercase",
          }}
        >
          {product.quantity < 1 ? "Unavailable" : product.quantity}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ my: "25px" }}
        gap={"15px"}
      >
        <Typography
          variant="h4"
          color="primary"
          fontWeight="fontWeightMedium"
          sx={{ flexGrow: 1 }}
        >
          {matches ? `$${currentPrice}` : `USD $${currentPrice}`}
        </Typography>
        <Button
          variant="contained"
          sx={(theme) => ({
            fontWeight: "200",
            p: "13px",
            width: "35%",
            [theme.breakpoints.down("sm")]: { width: "40%", p: "5px 0" },
          })}
          disabled={product.quantity < 1 ? true : false}
          onClick={isCart ? removeFromBag : addToBag}
        >
          {isCart ? "DELETE FROM BAG" : "ADD TO BAG"}
        </Button>
        <Button
          variant={isFavorite ? "outlined" : "contained"}
          onClick={isFavorite ? removeFromFavorite : addToFavorite}
          sx={(theme) => ({
            fontWeight: "200",
            p: "13px",
            width: "10%",
            [theme.breakpoints.down("sm")]: { width: "5%", p: "7px" },
          })}
        >
          {isFavorite ? <Favorite /> : <FavoriteBorder />}
        </Button>
      </Stack>
      <Divider />
      <Accordion
        expanded={expanded === `panel1`}
        onChange={handleChange(`panel1`)}
        sx={{
          "&.Mui-expanded": {
            m: "2px 0",
          },
        }}
      >
        <AccordionSummary>
          <Stack direction="row" alignItems="center">
            {expanded === `panel1` ? (
              <Remove sx={{ mr: "20px" }} />
            ) : (
              <Add sx={{ mr: "20px" }} />
            )}
            <Typography variant="h6" sx={{ mb: "0px" }}>
              PRODUCT DESCRIPTION
            </Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            "&.MuiAccordionDetails-root": {
              padding: "0 50px 15px",
            },
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{ fontSize: "fontSize", lineHeight: "30px" }}
          >
            {description}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === `panel2`}
        onChange={handleChange(`panel2`)}
        sx={{
          "&.Mui-expanded": {
            m: "2px 0",
          },
        }}
      >
        <AccordionSummary>
          <Stack direction="row" alignItems="center">
            {expanded === `panel2` ? (
              <Remove sx={{ mr: "20px" }} />
            ) : (
              <Add sx={{ mr: "20px" }} />
            )}
            <Typography variant="h6" sx={{ mb: "0px" }}>
              REVIEWS
            </Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            "&.MuiAccordionDetails-root": {
              padding: "0 50px 15px",
            },
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{ fontSize: "fontSize", lineHeight: "30px" }}
          >
            Sorry, reviews list is empty :(
          </Typography>
        </AccordionDetails>
      </Accordion>
    </ProductInfoContainer>
  );
};

export default ProductInfo;
