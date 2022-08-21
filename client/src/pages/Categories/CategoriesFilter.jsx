import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import { CategoriesAccordion, PriceSlider, CategoriesRadio } from "./index.js";
import { colors, fabrics, sizes } from "./mockData.js";
import { ColorBox } from "./styles.js";

const CategoriesFilter = () => {
  const [activeColor, setActiveColor] = useState(0);

  return (
    <Stack sx={{ width: "25%" }}>
      <Typography variant="h2" sx={{ letterSpacing: "0" }}>
        CATALOG
      </Typography>
      <CategoriesAccordion title="Price">
        <PriceSlider />
      </CategoriesAccordion>
      <CategoriesAccordion title="Size">
        <CategoriesRadio options={sizes} />
      </CategoriesAccordion>
      <CategoriesAccordion title="Color">
        <Stack direction="row" flexWrap="wrap" gap="10px" width="70%">
          {colors.map((color, index) => (
            <ColorBox
              key={color.id}
              sx={{
                backgroundColor: color.color,
                borderColor: activeColor === index ? "primary.main" : null,
              }}
              onClick={() => {
                setActiveColor(index);
              }}
            />
          ))}
        </Stack>
      </CategoriesAccordion>
      <CategoriesAccordion title="Fabric">
        <CategoriesRadio options={fabrics} />
      </CategoriesAccordion>
    </Stack>
  );
};

export default CategoriesFilter;
