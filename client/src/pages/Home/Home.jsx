import { Container } from "@mui/material";
import { ImageSlider } from "../../components";
import { SliderWrapper } from "./styles";

const Home = () => {
  return (
    <>
      <SliderWrapper>
        <ImageSlider />
      </SliderWrapper>
      <Container>{/* решту компонентів Home Page писати сюди */}</Container>
    </>
  );
};

export default Home;
