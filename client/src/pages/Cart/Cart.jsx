import {CartProductList, MightLike} from "../../components";
// import { EmptyCart } from "../../components";
import { Container } from "@mui/system";

import { useSelector } from "react-redux";
const Cart = () => {
  const  cart  = useSelector(
    (state) => state.cart.cart
  );

  return (
    <>
      <Container>
        <CartProductList products={cart}/>
        {/* коли буде стейт - додати умову відображення корзини */}
        {/* <EmptyCart /> */}
        <MightLike sectionTitle="YOU MIGHT LIKE IT TOO"/>
      </Container>
    </>
  );
};

export default Cart;
