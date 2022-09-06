// import { CartProductCard, CustomHr } from "./index";

import { Container, Button, Typography, Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";
// import products from "./ProductsExamples.jsx";

const EmptyFavorites = () => {
  return (
    <>
      <Container>
        <Stack justifyContent="center">
          <Typography
            variant="h2"
            sx={{
              lineHeight: "45px",
              m: "0 auto",
              pt: "100px",
            }}
          >
            YOUR FAVORITES IS FEELING LONELY - ADD
          </Typography>
          {/* <Box sx={{}}> */}
          <Typography
            variant="h2"
            sx={{
              lineHeight: "45px",
              m: "0 auto",
            }}
          >
            SOME BEAUTIFUL NEW TO IT!
          </Typography>
        </Stack>

        <Box display="flex" justifyContent="center">
          <Link to="/categories" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                mt: "100px",
                mb: "82px",
                p: "15px 48px",
              }}
            >
              continue shopping
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default EmptyFavorites;
