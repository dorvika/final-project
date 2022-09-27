import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeAllFromCart } from "../../../store/cart/actions";
import { placeOrder } from "../../../utils/api";
const ThanksOrderPage = ({ makeOrder }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    placeOrder("/orders", makeOrder());
    dispatch(removeAllFromCart());
  }, []);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "150px 0",
        }}
      >
        <Typography
          variant="h2"
          textAlign="center"
          sx={{ mb: "50px", textTransform: "uppercase" }}
        >
          Thank you for your order!
        </Typography>
          <Button 
          LinkComponent={Link} 
          variant="contained" 
          to="/catalog?perPage=9&startPage=1" 
          sx={{ p: "15px 85px", textDecoration: "none" }}>
            Continue Shopping
          </Button>
      </Box>
    </>
  );
};

export default ThanksOrderPage;
