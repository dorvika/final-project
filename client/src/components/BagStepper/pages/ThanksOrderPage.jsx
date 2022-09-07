import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ThanksOrderPage = ({ makeOrder }) => {
  useEffect(() => {
    console.log(makeOrder());
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
        <Link to="/catalog" style={{ textDecoration: "none" }}>
          <Button variant="contained" sx={{ p: "15px 85px" }}>
            Continue Shopping
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default ThanksOrderPage;
