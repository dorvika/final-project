import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { CustomHr } from "../../Cart/index";
import ShoppingBag from "../components/ShoppingBagProducts/ShoppingBag.jsx";
import { Link } from "react-router-dom";
import Summary from "../components/Summary/Summary.jsx";
import CustomBackButton from "../components/CustomBackButton/CustomBackButton.jsx";

const ShoppingBagPage = ({ title, products, next, subtotal }) => {
  return (
    <Container
      sx={(theme) => ({
        p: "80px 0",
        [theme.breakpoints.down("md")]: {
          p: "40px 0",
        },
        [theme.breakpoints.down("sm")]: {
          p: "20px 0",
        },
      })}
    >
      <Grid container spacing={20}>
        <Grid item md={8} xs={12}>
          <Box>
            <Typography
              variant="h4"
              sx={{
                color: "primary.main",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                mb: "15px",
              }}
            >
              {title}
            </Typography>
            <CustomHr sx={{ mb: "20px" }} />
            <ShoppingBag products={products} />
            <CustomHr sx={{ m: "20px 0" }} />
            <Link
              to="/cart"
              style={{
                textDecoration: "none",
              }}
            >
              <CustomBackButton />
            </Link>
          </Box>
        </Grid>

        <Grid item md={4} xs={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "primary.main",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                mb: "15px",
              }}
            >
              Summary
            </Typography>
            <CustomHr sx={{ mb: "10px" }} />
            <Summary subtotal={subtotal} />
            <Button
              variant="contained"
              sx={(theme) => ({
                p: "15px 85px",
                alignSelf: "flex-end",
                [theme.breakpoints.down("670")]: { alignSelf: "center" },
              })}
              onClick={() => next()}
            >
              Buy
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShoppingBagPage;
