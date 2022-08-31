import { BagStepper } from "../../components";
import { useSelector } from "react-redux";

const CheckOut = () => {
  const  cart  = useSelector((state) => state.cart.cart);
  return <BagStepper products={cart}/>;
};

export default CheckOut;
