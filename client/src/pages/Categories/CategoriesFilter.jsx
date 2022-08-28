import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CategoriesAccordion, PriceSlider, CategoriesRadio } from "./index.js";
import { ColorBox } from "./styles.js";
import { fetchData } from "../../utils/api.js";

const CategoriesFilter = ({ setFilterObj, filterObj }) => {
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [activeColor, setActiveColor] = useState("#C96456");

  useEffect(() => {
    fetchData("/colors").then((result) => setColors(result));
    fetchData("/sizes").then((result) => setSizes(result));
    fetchData("/filters").then((result) => setMaterials(result));
  }, []);

  return (
    <Stack sx={{ width: "25%" }}>
      <Typography variant="h2" sx={{ letterSpacing: "0" }}>
        CATALOG
      </Typography>
      <CategoriesAccordion title="Price">
        <PriceSlider setFilterObj={setFilterObj} filterObj={filterObj} />
      </CategoriesAccordion>
      <CategoriesAccordion title="Size">
        <CategoriesRadio
          options={sizes}
          setFilterObj={setFilterObj}
          filterObj={filterObj}
        />
      </CategoriesAccordion>
      <CategoriesAccordion title="Color">
        <Stack direction="row" flexWrap="wrap" gap="10px" width="70%">
          {colors.map(({ _id, cssValue, name }) => (
            <ColorBox
              key={_id}
              sx={{
                backgroundColor: cssValue,
                borderColor: activeColor === cssValue ? "primary.main" : null,
              }}
              onClick={() => {
                setActiveColor(cssValue);
                setFilterObj({ ...filterObj, color: name.toLowerCase() });
              }}
            />
          ))}
        </Stack>
      </CategoriesAccordion>
      <CategoriesAccordion title="Material">
        <CategoriesRadio
          options={materials}
          materialFlag
          setFilterObj={setFilterObj}
          filterObj={filterObj}
        />
      </CategoriesAccordion>
    </Stack>
  );
};

export default CategoriesFilter;
