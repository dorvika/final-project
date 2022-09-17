import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header, Footer } from "./components";
import Router from "./router/Router.jsx";
import { fetchLoggedInUserData } from "./store/isLogged/actions";
import { getDataLS } from "./utils/api";
import { isTokenExpired } from "./utils/helpers";
import { customerCart } from "./store/cart/actions";

function App() {
  
  const dispatch = useDispatch();
  const token = getDataLS("userToken");

  useEffect(() => {
    if (token.length !== 0) {
      !isTokenExpired(token) && dispatch(fetchLoggedInUserData());
    }
  }, []);

  useEffect(() => {
    if (token.length !== 0) dispatch(customerCart());
  }, [dispatch, token.length]);
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
