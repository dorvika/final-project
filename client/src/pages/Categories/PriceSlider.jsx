import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import { CustomPriceSlider, CustomTextField } from "./styles";

const PriceSlider = ({ setFilterObj, filterObj }) => {
  const primaryMinPrice = filterObj.minPrice || 10;
  const primaryMaxPrice = filterObj.maxPrice || 500;
  const [price, setPrice] = useState({
    minPrice: primaryMinPrice,
    maxPrice: primaryMaxPrice,
  });
  const [sliderValues, setSliderValues] = useState([
    +primaryMinPrice,
    +primaryMaxPrice,
  ]);

  const handleSliderChange = (event, newValue) => {
    setPrice({
      ...price,
      minPrice: Math.min(...newValue),
      maxPrice: Math.max(...newValue),
    });
    setSliderValues(newValue);
    setFilterObj({
      ...filterObj,
      minPrice: newValue[0],
      maxPrice: newValue[1],
    });
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
    const newValue = Object.values(newPrice);
    setFilterObj({
      ...filterObj,
      minPrice: newValue[0],
      maxPrice: newValue[1],
    });
  };

  const handleBlur = () => {
    if (price.minPrice < 0) {
      setPrice({ ...price, minPrice: 10 });
    } else if (price.maxPrice > 500) {
      setPrice({ ...price, maxPrice: 500 });
    }
    setSliderValues(Object.values(price));
    const newValue = Object.values(price);
    setFilterObj({
      ...filterObj,
      minPrice: newValue[0],
      maxPrice: newValue[1],
    });
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
      <Stack direction="row" spacing={8} sx={{ mt: "10px" }}>
        <Typography component="span" variant="subtitle1">
          FROM
        </Typography>
        <CustomTextField
          name="minPrice"
          value={price.minPrice}
          onChange={handleInputChange}
          onBlur={handleBlur}
          inputProps={{
            step: 10,
            min: 10,
            max: 500,
            type: "number",
            "aria-labelledby": "input-slider",
          }}
        />
        <Typography component="span" variant="subtitle1">
          TO
        </Typography>
        <CustomTextField
          name="maxPrice"
          value={price.maxPrice}
          onChange={handleInputChange}
          onBlur={handleBlur}
          inputProps={{
            step: 10,
            min: 10,
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
