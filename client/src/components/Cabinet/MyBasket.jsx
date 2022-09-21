import { Typography, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import CartProductList from "../Cart/CartProductList.jsx";
import EmptyCart from "../Cart/EmptyCart.jsx";

const MyBasket = () => {
  const { cart } = useSelector((state) => state.cart);
  const isCartEmpty = cart.length !== 0;
  console.log(cart);

  return (
    <>
      {/* <Stack justifyContent="center"> */}
      <Typography variant="h2">Products in Basket</Typography>

      <Divider />
      {isCartEmpty ? <CartProductList products={cart} /> : <EmptyCart />}
      {/* </Stack> */}
    </>
  );
};
export default MyBasket;
