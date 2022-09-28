import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ShoppingBag from "../components/ShoppingBagProducts/ShoppingBag.jsx";
import { useState } from "react";
import { CustomHr } from "../../Cart/index";

import Summary from "../components/Summary/Summary.jsx";
import ShippingForm from "../components/FormikForms/ShippingForm.jsx";

const ShippingDetailsPage = ({ data, next, prev, title, products, subtotal }) => {
  const [shipping, setShipping] = useState();
  const handleSubmit = (values) => {
    next(values);
  };
  const handleBack = (values) => {
    prev(values);
  };

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
      <Grid container spacing={{ xs: 10, sm: 20, md: 40 }}>
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
            <CustomHr sx={{ m: "20px 0" }} />
            <Box>
              <ShippingForm
                data={data}
                next={handleSubmit}
                prev={handleBack}
                shipping={setShipping}
              />
            </Box>
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
                mb: "20px",
              }}
            >
              Summary
            </Typography>
            <CustomHr sx={{ mb: "10px" }} />
            <ShoppingBag products={products} small={true} />
            <CustomHr sx={{ mt: "10px" }} />
            <Summary subtotal={subtotal} shipping={shipping} />
            <Button
              variant="contained"
              form="shipping"
              type="submit"
              sx={(theme) => ({
                p: "15px 85px",
                alignSelf: "flex-end",
                [theme.breakpoints.down("670")]: { alignSelf: "center" },
              })}
              onClick={() => {}}
            >
              Next
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShippingDetailsPage;
