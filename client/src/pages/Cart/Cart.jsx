import { CartProductList, MightLike , EmptyCart } from "../../components";

import { Container } from "@mui/system";

import { useSelector } from "react-redux";
import { Breadcrumbs, Link } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";
const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const isCartEmpty = cart.length !== 0;

  return (
    <>
      <Container>
        <Breadcrumbs>
          <Link component={LinkRouter} underline="hover" color="inherit" to="/">
            Home
          </Link>
          <Link component={LinkRouter} underline="hover" color="inherit" to="/cart">
            Shopping Bag
          </Link>
        </Breadcrumbs>
        {isCartEmpty ? <CartProductList products={cart} /> : <EmptyCart />}
        <MightLike
          sectionTitle={
            isCartEmpty ? "YOU MIGHT LIKE IT TOO" : "YOU MIGHT LIKE IT"
          }
        />
      </Container>
    </>
  );
};

export default Cart;
