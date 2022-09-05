import { Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CategoriesAccordion, PriceSlider, CategoriesRadio } from "./index.js";
import { ColorBox } from "./styles.js";
import { fetchData } from "../../utils/api.js";

const CategoriesFilter = ({
  filterObj,
  setFilterObj,
  selectedFilters,
  setSearchParams,
}) => {
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [activeColor, setActiveColor] = useState(filterObj.color || "");

  const allColors = colors.map((color) => color.name.toLowerCase()).join();

  useEffect(() => {
    fetchData("/colors").then((result) => setColors(result));
    fetchData("/sizes").then((result) => setSizes(result));
    fetchData("/filters").then((result) => setMaterials(result));
  }, []);

  const resetFilters = () => {
    setSearchParams({
      categories: filterObj.categories ? filterObj.categories : "",
    });
    setFilterObj({
      categories: filterObj.categories ? filterObj.categories : "",
    });
    window.location.reload();
  };

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
                borderColor:
                  activeColor === cssValue || activeColor === name.toLowerCase()
                    ? "primary.main"
                    : null,
              }}
              onClick={() => {
                setActiveColor(cssValue);
                setFilterObj({ ...filterObj, color: name.toLowerCase() });
              }}
            />
          ))}
          <ColorBox
            onClick={() => {
              setActiveColor(allColors);
              setFilterObj({ ...filterObj, color: allColors });
            }}
            sx={{
              borderRadius: "0",
              width: "auto",
              height: "auto",
              p: "0 3px",
              fontFamily: "",
              borderColor: activeColor === allColors ? "primary.main" : null,
            }}
          >
            All
          </ColorBox>
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
      {Object.keys(selectedFilters).includes("categories") &&
        Object.values(selectedFilters).length > 1 && (
          <Button variant="outlined" sx={{ mt: "10px" }} onClick={resetFilters}>
            Reset Filters
          </Button>
        )}
    </Stack>
  );
};

export default CategoriesFilter;
