import { Container } from "@mui/material";
import { ImageSlider, NewInSection } from "../../components";
import { SliderWrapper } from "./styles";

const Home = () => {
  return (
    <>
      <SliderWrapper>
        <ImageSlider />
      </SliderWrapper>
      <Container>
        {/* решту компонентів Home Page писати сюди */}
        <NewInSection/>
        </Container>
    </>
  );
};

export default Home;
