import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../utils/api";

const SpecialOffer = () => {
  const { id } = useParams();
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    fetchData("/slides").then((result) => setSlides(result));
  }, []);

  let [selectedOffer] = slides.filter(
    (slide, index) => index + 1 === Number(id)
  );

  return (
    <Container>
      <Breadcrumbs sx={{ mb: "10px" }}>
        <Link underline="hover" color="inherit" href="/">
          Shop
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/catalog?perPage=9&startPage=1"
        >
          Catalog
        </Link>
      </Breadcrumbs>
      <Stack direction="column" alignItems="center" sx={{ mb: "40px" }}>
        <Typography variant="h2" sx={{ textAlign: "center", mb: "10px" }}>
          {selectedOffer?.title}
        </Typography>
        <Box
          sx={(theme) => ({
            backgroundImage: `url(${selectedOffer?.imageUrl})`,
            width: "100%",
            height: "500px",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            [theme.breakpoints.down("md")]: { height: "300px" },
          })}
        ></Box>
        <Typography
          variant="h2"
          sx={(theme) => ({
            letterSpacing: "0",
            fontSize: 24,
            my: "20px",
            lineHeight: "35px",
            textAlign: "center",
            [theme.breakpoints.down("md")]: {
              fontSize: 20,
              lineHeight: "25px",
            },
          })}
        >
          {selectedOffer?.description
            ? selectedOffer?.description
            : "Postil' Bedding it's always the best quality with the best price. To go the catalog and you'll see"}
          .
        </Typography>
        <Button variant="outlined" href="/catalog?perPage=9&startPage=1">
          Go to Shopping
        </Button>
      </Stack>
    </Container>
  );
};

export default SpecialOffer;
