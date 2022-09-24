import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import theme from "../../../muiTheme/theme";

const OrderCard = ({ order }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const date = new Date(order.date);
  const purchaseDate = date.toLocaleDateString();
  console.log(order);

  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              borderColor: "primary.main",
              borderWidth: "3px",
              borderRadius: "5px",
              backgroundColor: "primary.main",
            }}
          />

          <Typography
            variant="subtitle2"
            sx={{ ml: "15px", width: "33%", flexShrink: 0 }}
          >
            № {order.orderNo} from {purchaseDate}
          </Typography>
          {expanded !== "panel1" && (
            <>
              <Box sx={{ width: "33%" }}>
                <Typography variant="subtitle2">Amount of order</Typography>
                <Typography variant="body">${order.totalSum}</Typography>
              </Box>
              <Stack
                direction="row"
                justifyContent="flex-end"
                sx={{ width: "33%" }}
              >
                {order.products.map((product) => {
                  return (
                    <Card key={product.product.itemNo} sx={{ mr: "10px" }}>
                      <CardMedia
                        component="img"
                        height="56px"
                        sx={{
                          width: "56px",
                          [theme.breakpoints.down("sm")]: {
                            mr: "0",
                            width: "300px",
                          },
                        }}
                        image={product.product.imageUrls[0]}
                      />
                    </Card>
                  );
                })}
              </Stack>
            </>
          )}
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="row" sx={{ ml: "24px" }}>
            <Box sx={{ mr: "50px" }}>
              <Typography
                variant="subtitle2"
                sx={{ mb: "20px", fontSize: "16px" }}
              >
                Order Details
              </Typography>
              <Typography
                variant="body"
                sx={{ fontSize: "14px", fontWeight: 700, mb: "10px" }}
              >
                Order Delivery Address
              </Typography>
              <Typography
                component="p"
                variant="body"
                sx={{ fontSize: "14px" }}
              >
                {order.deliveryAddress.city +
                  " " +
                  order.deliveryAddress.address}
              </Typography>

              <Typography
                component="p"
                variant="body"
                sx={{ fontSize: "14px" }}
              >
                {order.customerId.firstName} {order.customerId.lastName}
              </Typography>
              <Typography
                component="p"
                variant="body"
                sx={{ fontSize: "14px" }}
              >
                {order.email}
              </Typography>
              <Typography
                component="p"
                variant="body"
                sx={{ fontSize: "14px" }}
              >
                {order.mobile}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="subtitle2"
                sx={{ mb: "20px", fontSize: "16px" }}
              >
                Products
              </Typography>
              {order.products.map((product) => {
                return (
                  <Card
                    key={product.product.itemNo}
                    sx={{ display: "flex", alignItems: "center", mb: "20px" }}
                  >
                    <CardMedia
                      component="img"
                      height="56px"
                      sx={{
                        width: "56px",
                        [theme.breakpoints.down("sm")]: {
                          mr: "5px",
                        },
                        [theme.breakpoints.up("sm")]: {
                          mr: "15px",
                        },
                      }}
                      image={product.product.imageUrls[0]}
                    ></CardMedia>
                    <Typography
                      component="p"
                      variant="body"
                      sx={{
                        fontSize: "14px",
                        m: "0 20px",
                        textTransform: "capitalize",
                        width: "60%",
                      }}
                    >
                      {product.product.name}
                    </Typography>
                    <Box sx={{ m: "0 40px" }}>
                      <Typography variant="subtitle2">Price</Typography>
                      <Typography
                        component="p"
                        variant="body"
                        sx={{ fontSize: "14px" }}
                      >
                        ${product.product.currentPrice}
                      </Typography>
                    </Box>
                    <Box sx={{ m: "0 40px" }}>
                      <Typography variant="subtitle2">Quantity</Typography>
                      <Typography
                        component="p"
                        variant="body"
                        sx={{ fontSize: "14px" }}
                      >
                        {product.cartQuantity}
                      </Typography>
                    </Box>
                    <Box sx={{ m: "0 40px" }}>
                      <Typography variant="subtitle2">Amount</Typography>
                      <Typography
                        component="p"
                        variant="body"
                        sx={{ fontSize: "14px" }}
                      >
                        ${product.cartQuantity * product.product.currentPrice}
                      </Typography>
                    </Box>
                  </Card>
                );
              })}
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ mt: "20px" }}
              >
                <Typography variant="subtitle2"> Payment</Typography>
                <Typography
                  component="p"
                  variant="body"
                  sx={{ fontSize: "14px", textTransform: "capitalize" }}
                >
                  {order.paymentInfo}
                </Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="subtitle2"> Delivery</Typography>
                <Typography
                  component="p"
                  variant="body"
                  sx={{ fontSize: "14px", textTransform: "capitalize" }}
                >
                  {order.shipping}
                </Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="subtitle2"> Total Sum</Typography>
                <Typography
                  component="p"
                  variant="body"
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    textTransform: "capitalize",
                  }}
                >
                  ${order.totalSum}
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
export default OrderCard;
