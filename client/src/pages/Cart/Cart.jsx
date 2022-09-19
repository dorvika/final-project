import { CartProductList, MightLike , EmptyCart } from "../../components";

import { Container } from "@mui/system";

import { useSelector } from "react-redux";
import { Breadcrumbs, Link } from "@mui/material";
const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const isCartEmpty = cart.length !== 0;

  return (
    <>
      <Container>
        <Breadcrumbs>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/cart">
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
