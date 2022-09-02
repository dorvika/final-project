import {
  Add,
  Remove,
  FacebookOutlined,
  Twitter,
  Instagram,
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
} from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";
import {
  ProductInfoContainer,
  SizesContainer,
  SocialMediaContainer,
} from "./styles";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/Cart/actions";

const ProductInfo = ({ name, id, colors, sizes, currentPrice, info, product }) => {
  const [activeColor, setActiveColor] = useState(0);
  const [activeSize, setActiveSize] = useState("single");
  const [expanded, setExpanded] = useState("panel1");
  const dispatch = useDispatch();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const addToBag = () => {
    dispatch(addToCart(product))
  };

  return (
    <ProductInfoContainer>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h2">{name}</Typography>
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
      <Typography variant="body" component="p" sx={{ mt: "25px", mb: "10px" }}>
        COLOR
      </Typography>
      <Stack direction="row" gap="10px">
        {colors.map((color, index) => (
          <Box
            key={color}
            sx={{
              backgroundColor: color,
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              cursor: "pointer",
              border: "1px solid transparent",
              transition: "border 0.3s ease-in",
              borderColor: activeColor === index ? "primary.main" : null,
            }}
            onClick={() => {
              setActiveColor(index);
            }}
          ></Box>
        ))}
      </Stack>
      <Typography variant="body" component="p" sx={{ mt: "25px", mb: "10px" }}>
        SIZE
      </Typography>
      <SizesContainer>
        {sizes.map((size) => (
          <Typography
            variant="body"
            component="span"
            key={size}
            sx={{
              cursor: "pointer",
              textTransform: "uppercase",
              borderBottom: "1px solid transparent",
              transition: "border 0.5s ease-in",
              borderColor: activeSize === size ? "primary.main" : null,
            }}
            onClick={() => setActiveSize(size)}
          >
            {size}
          </Typography>
        ))}
      </SizesContainer>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ my: "25px" }}
      >
        <Typography variant="h4" color="primary" fontWeight="fontWeightMedium">
          {/* USD ${currentPrice.toFixed(2)} */}
          USD ${currentPrice}
        </Typography>
        <Button
          variant="contained"
          sx={{ fontWeight: "200", p: "15px", width: "35%" }}
          onClick={addToBag}
        >
          ADD TO BAG
        </Button>
      </Stack>
      <Divider />
      {info.map((item, index) => (
        <Accordion
          key={item.title}
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
          sx={{
            "&.Mui-expanded": {
              m: "2px 0",
            },
          }}
        >
          <AccordionSummary>
            <Stack direction="row" alignItems="center">
              {expanded === `panel${index + 1}` ? (
                <Remove sx={{ mr: "20px" }} />
              ) : (
                <Add sx={{ mr: "20px" }} />
              )}
              <Typography variant="h6" sx={{ mb: "0px" }}>
                {item.title}
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
              {item.content}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </ProductInfoContainer>
  );
};

export default ProductInfo;

ProductInfo.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  colors: PropTypes.array,
  sizes: PropTypes.array,
  currentPrice: PropTypes.number,
  info: PropTypes.array,
};
