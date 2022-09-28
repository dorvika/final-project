import { styled } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Preloader from "../../../utils/Preloader.jsx";
import { removeAllFromCart } from "../../../store/cart/actions";
import { placeOrder } from "../../../utils/api";
import CustomMessage from "../components/CustomOrderMessage/CustomMessage.jsx";

const ThanksOrderPage = ({ makeOrder }) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true);
    const order = async () => {
      await placeOrder("/orders", makeOrder());
    };
    order()
      .then(() => {
        dispatch(removeAllFromCart());
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const CustomBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "150px 0",
  }));
  return (
    <>
      {isLoading && (
        <CustomBox>
          <Preloader />
        </CustomBox>
      )}
      {!isLoading && error && (
        <CustomBox>
          <CustomMessage text="Oops! Something wrong with your order..." />
        </CustomBox>
      )}

      {!isLoading && !error && (
        <CustomBox>
          <CustomMessage text="Thank you for your order!" />
        </CustomBox>
      )}
    </>
  );
};

export default ThanksOrderPage;
