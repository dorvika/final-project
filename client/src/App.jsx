import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header, Footer } from "./components";
import Router from "./router/Router.jsx";
import { fetchLoggedInUserData } from "./store/isLogged/actions";
import { getDataLS } from "./utils/api";
import { isTokenExpired } from "./utils/helpers";
import { customerCart } from "./store/cart/actions";
import {customerWishlist} from "./store/favorites/actions"

function App() {
  
  const dispatch = useDispatch();
  const token = getDataLS("userToken");

  useEffect(() => {
    if (token.length !== 0) {
      !isTokenExpired(token) && dispatch(fetchLoggedInUserData());
      !isTokenExpired(token) && dispatch(customerCart());
      !isTokenExpired(token) && dispatch(customerWishlist());
    }
  }, [dispatch, token]);
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
