import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import theme from "../../../muiTheme/theme";
import { putData } from "../../../utils/api";
import { Preloader } from "../../../pages/Categories";

const OrderCard = ({ order }) => {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const isCancelled = order.canceled === true;
  const [cancelData, setCancelData] = useState({ status: "", data: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const date = new Date(order.date);
  const purchaseDate = date.toLocaleDateString();

  const handleCancel = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCancelData({ status: "", data: "" });
  };

  const handleConfirm = () => {
    setIsLoading(true);
    putData(`/orders/cancel/${order._id}`, {
      email: `${order.email}`,
      letterSubject: "Order Cancelation",
      letterHtml: `<p>Your order № ${order.orderNo} has been cancelled</p>`,
    })
      .then((order) => {
        setCancelData({ status: order.status, data: order.data });
        setIsLoading(false);
        setTimeout(handleClose, 3000);
      })
      .catch((error) => {
        setCancelData({ status: error.status, data: error.data });
      });
  };

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
              borderColor: !isCancelled ? "primary.main" : "#DADADA",
              borderWidth: "3px",
              borderRadius: "5px",
              backgroundColor: !isCancelled ? "primary.main" : "#DADADA",
            }}
          />
          <Box sx={{ ml: "15px", width: "33%", flexShrink: 0 }}>
            <Typography variant="subtitle2">
              № {order.orderNo} from {purchaseDate}
            </Typography>
            <Typography variant="body" textTransform="capitalize">
              {isCancelled ? "cancelled" : order.status}
            </Typography>
          </Box>
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
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ mt: "20px" }}
              >
                {!isCancelled && order.status === "confirmed" && (
                  <Button
                    onClick={handleCancel}
                    variant="contained"
                    sx={{ p: "5px 30px" }}
                  >
                    Cancel
                  </Button>
                )}
              </Stack>
            </Box>
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {/* <Typography variant="h2">Order Cancelation</Typography> */}
          Order Cancelation
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Typography variant="body">
              Are you sure you want to cancel the order {order.orderNo}?
            </Typography>
          </DialogContentText>

          {isLoading && (
            <Box sx={{ mt: "15px" }}>
              <Preloader />
            </Box>
          )}
          <Box sx={{ mt: "10px", textAlign: "center" }}>
            {cancelData.status === 200 && (
              <Typography variant="body">
                Your order has been cancelled
              </Typography>
            )}
            {cancelData.status === 400 && (
              <Typography variant="body">
                Opps, something went wrong, try again
              </Typography>
            )}
          </Box>
        </DialogContent>
        <DialogActions
          sx={{ m: "10px 0", display: "flex", justifyContent: "space-around" }}
        >
          <Button
            variant="contained"
            disabled={isLoading ? true : false}
            sx={{ p: "5px 30px" }}
            onClick={handleConfirm}
          >
            Confirm
          </Button>
          <Button
            variant="outlined"
            sx={{ p: "5px 30px", lineHeight: "32px" }}
            onClick={handleClose}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default OrderCard;
