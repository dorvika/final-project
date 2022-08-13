import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchSlides } from "../../utils/api";
import {
  SliderContainer,
  Slider,
  LeftArrow,
  Slide,
  SlideContent,
  SlideTitle,
  SlideDescription,
  SlideButton,
  RightArrow,
  SliderDots,
  SliderDot,
} from "./styles";

const ImageSlider = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchSlides().then((result) => setSlides(result));
  }, []);

  useEffect(() => {
    const timer = setTimeout(goToNextSlide, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex]);

  const goToPreviousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <SliderContainer>
      <Slider>
        <LeftArrow onClick={goToPreviousSlide} />
        <Link to="/categories">
          <Slide
            sx={{
              backgroundImage: `url(${slides[currentIndex]?.imageUrl})`,
            }}
          ></Slide>
          <SlideContent>
            <div>
              <SlideTitle>{slides[currentIndex]?.title}</SlideTitle>
              <br />
              {slides[currentIndex]?.description && (
                <SlideDescription>
                  {slides[currentIndex].description}
                </SlideDescription>
              )}
            </div>
            <SlideButton>SHOP NEW ARRIVALS</SlideButton>
          </SlideContent>
        </Link>
        <RightArrow onClick={goToNextSlide} />
        <SliderDots>
          {slides.map((slide, slideIndex) => (
            <SliderDot
              key={slide.customId}
              sx={{ color: currentIndex === slideIndex ? "#373f41" : null }}
              onClick={() => goToSlide(slideIndex)}
            />
          ))}
        </SliderDots>
      </Slider>
    </SliderContainer>
  );
};

export default ImageSlider;
