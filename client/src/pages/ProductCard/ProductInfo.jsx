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
import {
  ProductInfoContainer,
  // SizesContainer,
  SocialMediaContainer,
} from "./styles";

const ProductInfo = ({ name, id, color, size, currentPrice, description }) => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const addToBag = () => {
    console.log("Product was added to bag");
  };

  return (
    <ProductInfoContainer>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h2" sx={{ textTransform: "uppercase" }}>
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
        sx={{ mt: "25px", mb: "10px" }}
      >
        <Typography variant="body" component="p">
          COLOR :
        </Typography>
        <Box
          sx={{
            backgroundColor: color,
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            border: "1px solid transparent",
            borderColor: "primary.main",
          }}
        ></Box>
      </Stack>
      <Stack
        direction="row"
        gap="10px"
        alignItems="center"
        sx={{ mt: "20px", mb: "10px" }}
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
        justifyContent="space-between"
        alignItems="center"
        sx={{ my: "25px" }}
      >
        <Typography variant="h4" color="primary" fontWeight="fontWeightMedium">
          USD ${currentPrice.toFixed(2)}
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
      {/* {info.map((item, index) => ( */}
      <Accordion
        // key={item.title}
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
      {/* ))} */}
    </ProductInfoContainer>
  );
};

export default ProductInfo;
