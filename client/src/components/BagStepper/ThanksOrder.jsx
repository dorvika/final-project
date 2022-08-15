import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ThanksOrder = () => {
  return (
    <React.Fragment>
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

        <Button sx={{ p: "15px 85px" }}>Continue Shopping</Button>
      </Box>
    </React.Fragment>
  );
};

export default ThanksOrder;
