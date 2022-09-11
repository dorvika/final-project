import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header, Footer } from "./components";
import Router from "./router/Router.jsx";
import { fetchLoggedInUserData } from "./store/IsLogged/actions";
import { getDataLS } from "./utils/api";

function App() {
  const dispatch = useDispatch();
  const token = getDataLS("userToken");

  useEffect(() => {
    if (token.length !== 0) dispatch(fetchLoggedInUserData());
  }, []);

  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
