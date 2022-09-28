import { Stack } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ProductSlide,
  ProductSliderContainer,
} from "./styles";

const ProductSlider = ({ imageUrls }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToImage = (index) => {
    setCurrentSlide(index);
  };

  const goToPreviousImage = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? imageUrls.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  const goToNextImage = () => {
    const isLastSlide = currentSlide === imageUrls.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };

  return (
    <ProductSliderContainer>
      <ProductSlide
        sx={{
          backgroundImage: `url(${imageUrls[currentSlide]})`,
        }}
      >
        <ArrowLeft onClick={goToPreviousImage} />
        <ArrowRight onClick={goToNextImage} />
      </ProductSlide>
      <Stack direction="row" gap="5%" justifyContent="center" marginTop="20px">
        {imageUrls.map((imageUrl, index) => (
          <img
            style={{
              display: currentSlide === index ? "none" : "block",
              cursor: "pointer",
              maxWidth: "100%",
            }}
            role="presentation"
            key={imageUrl}
            src={imageUrl}
            width="30%"
            alt="preview"
            onClick={() => goToImage(index)}
          />
        ))}
      </Stack>
    </ProductSliderContainer>
  );
};

export default ProductSlider;

ProductSlider.propTypes = {
  imageUrls: PropTypes.array,
};
