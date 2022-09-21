import { Container } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CabinetMenu } from "../../components";
import { fetchLoggedInUserData } from "../../store/isLogged/actions";

const Cabinet = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLoggedInUserData());
  }, []);
  return (
    <Container>
      <CabinetMenu />
    </Container>
  );
};

export default Cabinet;
