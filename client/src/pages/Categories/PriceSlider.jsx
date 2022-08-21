import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import { CustomPriceSlider, CustomTextField } from "./styles";

const PriceSlider = () => {
  const [price, setPrice] = useState({ minPrice: 50, maxPrice: 350 });
  const [sliderValues, setSliderValues] = useState([50, 350]);

  const handleSliderChange = (event, newValue) => {
    setPrice({
      ...price,
      minPrice: Math.min(...newValue),
      maxPrice: Math.max(...newValue),
    });
    setSliderValues(newValue);
  };

  const handleInputChange = (event) => {
    const name = event.target.name;
    const newPrice = {
      ...price,
      [name]: event.target.value === "" ? "" : Number(event.target.value),
    };
    if (newPrice.minPrice > newPrice.maxPrice) {
      newPrice.minPrice = newPrice.maxPrice;
    }
    setPrice(newPrice);
    setSliderValues(Object.values(newPrice));
  };

  const handleBlur = () => {
    if (price.minPrice < 0) {
      setPrice({ ...price, minPrice: 0 });
    } else if (price.maxPrice > 500) {
      setPrice({ ...price, maxPrice: 500 });
    }
    setSliderValues(Object.values(price));
  };

  return (
    <>
      <CustomPriceSlider
        value={sliderValues}
        onChange={handleSliderChange}
        step={10}
        max={500}
        disableSwap
      />
      <Stack direction="row" spacing={8} sx={{ mt: "15px" }}>
        <Typography component="span">FROM</Typography>
        <CustomTextField
          name="minPrice"
          value={price.minPrice}
          onChange={handleInputChange}
          onBlur={handleBlur}
          inputProps={{
            step: 10,
            min: 0,
            max: 500,
            type: "number",
            "aria-labelledby": "input-slider",
          }}
        />
        <Typography component="span">TO</Typography>
        <CustomTextField
          name="maxPrice"
          value={price.maxPrice}
          onChange={handleInputChange}
          onBlur={handleBlur}
          inputProps={{
            step: 10,
            min: 0,
            max: 500,
            type: "number",
            "aria-labelledby": "input-slider",
          }}
        />
      </Stack>
    </>
  );
};

export default PriceSlider;
