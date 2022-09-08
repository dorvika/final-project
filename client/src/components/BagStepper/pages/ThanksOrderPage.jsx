import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeAllFromCart } from "../../../store/Cart/actions";
const ThanksOrderPage = ({ makeOrder }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(makeOrder());
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
          sx={{ mb: "50px", textTransform: "uppercase" }}
        >
          Thank you for your order!
        </Typography>
        <Link
          to="/catalog?perPage=9&startPage=1"
          style={{ textDecoration: "none" }}
        >
          <Button variant="contained" sx={{ p: "15px 85px" }}>
            Continue Shopping
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default ThanksOrderPage;
