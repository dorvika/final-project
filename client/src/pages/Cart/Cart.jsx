import {CartProductList, MightLike} from "../../components";
// import { EmptyCart } from "../../components";
import { Container } from "@mui/system";

const Cart = () => {
  return (
    <>
      <Container>
        <CartProductList />
        {/* коли буде стейт - додати умову відображення корзини */}
        {/* <EmptyCart /> */}
        <MightLike />
      </Container>
    </>
  );
};

export default Cart;
