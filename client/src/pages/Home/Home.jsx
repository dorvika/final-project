import { Container } from "@mui/material";
import { ImageSlider, NewInSection, PopularSection } from "../../components";
import { SliderWrapper } from "./styles";

const Home = () => {
  return (
    <>
      <SliderWrapper>
        <ImageSlider />
      </SliderWrapper>
      <Container>
        <NewInSection />
        <PopularSection />
      </Container>
    </>
  );
};

export default Home;
