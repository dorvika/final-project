import { Container } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CabinetMenu } from "../../components";
import { getDataLS } from "../../utils/api";
import { isTokenExpired } from "../../utils/helpers";

const Cabinet = () => {
  const navigate = useNavigate();

  const token = getDataLS("userToken");

  useEffect(() => {
    if (token.length !== 0) {
      isTokenExpired(token) && navigate("/");
    }
  }, []);
  return (
    <Container>
      <CabinetMenu />
    </Container>
  );
};

export default Cabinet;
