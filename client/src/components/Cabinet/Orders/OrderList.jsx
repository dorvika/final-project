import { useEffect, useState } from "react";
import Preloader from "../../../utils/Preloader.jsx";
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
