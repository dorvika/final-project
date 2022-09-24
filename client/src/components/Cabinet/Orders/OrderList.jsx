// import { Typography } from "@mui/material";
// import { Fragment } from "react";

import { useEffect, useState } from "react";
import { Preloader } from "../../../pages/Categories";
import { fetchData } from "../../../utils/api";
import OrderCard from "./OrderCard.jsx";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchData("/orders")
      .then((orders) => {
        setOrders(orders);
      })
      //   .catch((error) => {
      //     console.log("error", error);
      //   })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && <Preloader />}
      {orders.map((order) => {
        return <OrderCard key={order.orderNo} order={order} />;
      })}
    </>
  );
};

export default OrderList;
