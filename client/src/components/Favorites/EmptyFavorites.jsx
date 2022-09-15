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
            sx={(theme) => ({
              [theme.breakpoints.up("sm")]: {
                lineHeight: "45px",
                m: "0 auto",
                pt: "100px",
              },
              [theme.breakpoints.down("sm")]: {
                lineHeight: "45px",
                m: "0 auto",
                pt: "50px",
                fontSize: "24px",
              },
            })}
          >
            YOUR FAVORITES IS FEELING LONELY - ADD
          </Typography>
          {/* <Box sx={{}}> */}
          <Typography
            variant="h2"
            sx={(theme) => ({
              lineHeight: "45px",
              m: "0 auto",
              [theme.breakpoints.down("sm")]: { fontSize: "24px" },
            })}
          >
            SOME BEAUTIFUL NEW TO IT!
          </Typography>
        </Stack>

        <Box display="flex" justifyContent="center">
          <Link
            to="/catalog?perPage=9&startPage=1"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              sx={(theme) => ({
                [theme.breakpoints.up("sm")]: {
                  mt: "100px",
                  mb: "82px",
                  p: "15px 48px",
                },
                [theme.breakpoints.down("sm")]: {
                  mt: "50px",
                  mb: "42px",
                  p: "15px 48px",
                },
              })}
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
