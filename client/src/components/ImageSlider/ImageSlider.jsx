import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  FiberManualRecord,
} from "@mui/icons-material";
import { fetchSlides } from "../../utils/api";
import "./imageSlider.scss";

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
    <Box component="div" className="slider__container">
      <Box component="div" className="slider">
        <ArrowBackIosNew className="arrow left" onClick={goToPreviousSlide} />
        <Link to="/categories">
          <Box
            className="slide__img"
            sx={{
              backgroundImage: `url(${slides[currentIndex]?.imageUrl})`,
            }}
          ></Box>
          <Box component="div" className="slide__content">
            <div>
              <Typography component="h3" className="slide__title">
                {slides[currentIndex]?.title}
              </Typography>
              <br />
              {slides[currentIndex]?.description && (
                <Typography component="p" className="slide__description">
                  {slides[currentIndex].description}
                </Typography>
              )}
            </div>
            <Button variant="contained" className="slide__btn">
              SHOP NEW ARRIVALS
            </Button>
          </Box>
        </Link>
        <ArrowForwardIos onClick={goToNextSlide} className="arrow right" />
        <div className="slider__dots">
          {slides.map((slide, slideIndex) => (
            <FiberManualRecord
              className="dot"
              key={slide.customId}
              sx={{ color: currentIndex === slideIndex ? "#373f41" : null }}
              onClick={() => goToSlide(slideIndex)}
            />
          ))}
        </div>
      </Box>
    </Box>
  );
};

export default ImageSlider;
