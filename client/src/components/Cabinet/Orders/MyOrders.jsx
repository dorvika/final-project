import { Typography, Divider } from "@mui/material";
import OrderList from "./OrderList.jsx";

const MyOrders = () => {
  return (
    <>
      <Typography
        variant="h2"
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: { fontSize: "28px" },
          [theme.breakpoints.down("sm")]: { fontSize: "22px" },
        })}
      >
        My Orders
      </Typography>

      <Divider sx={{ mb: "25px" }} />
      <OrderList />
    </>
  );
};
export default MyOrders;
