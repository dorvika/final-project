import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
const CustomMessage = ({ text }) => {
    return (
        <>
        <Typography
        variant="h2"
        sx={{ mb: "50px", textTransform: "uppercase" }}
      >
        {text}
      </Typography>
      <Button
        LinkComponent={Link}
        variant="contained"
        to="/catalog?perPage=9&startPage=1"
        sx={{ p: "15px 85px", textDecoration: "none" }}
      >
        Continue Shopping
      </Button>
      </>
    );
  };

  export default CustomMessage