import { Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CategoriesAccordion, PriceSlider, CategoriesRadio } from "./index.js";
import { ColorBox } from "./styles";
import { fetchData } from "../../utils/api.js";
import { useSearchParams } from "react-router-dom";

const CategoriesFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [activeColor, setActiveColor] = useState("");

  useEffect(() => {
    setActiveColor(searchParams.get("color"));
  }, [searchParams]);

  const allColors = colors.map((color) => color.name.toLowerCase()).join();

  useEffect(() => {
    fetchData("/colors").then((result) => setColors(result));
    fetchData("/sizes").then((result) => setSizes(result));
    fetchData("/filters").then((result) => setMaterials(result));
  }, []);

  const resetFilters = () => {
    if (searchParams.get("categories")) {
      setSearchParams({
        categories: searchParams.get("categories"),
        perPage: 9,
        startPage: 1,
      });
    } else {
      setSearchParams({
        perPage: 9,
        startPage: 1,
      });
    }
  };

  const filterParams = Object.keys(
    Object.fromEntries([...searchParams])
  ).filter(
    (param) =>
      param !== "categories" && param !== "perPage" && param !== "startPage"
  );

  return (
    <Stack sx={{ width: { md: "25%", sm: "100%" } }}>
      <Typography
        variant="h2"
        sx={(theme) => ({
          letterSpacing: "0",
          [theme.breakpoints.down("md")]: { display: "none" },
        })}
      >
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
                searchParams.set("color", name.toLowerCase());
                setSearchParams(searchParams);
              }}
            />
          ))}
          <ColorBox
            onClick={() => {
              setActiveColor(allColors);
              searchParams.set("color", allColors);
              setSearchParams(searchParams);
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
        <CategoriesRadio options={materials} materialFlag />
      </CategoriesAccordion>
      {filterParams.length > 0 && (
        <Button
          variant="outlined"
          sx={(theme) => ({
            mt: "10px",
            width: { xs: "100%", sm: "50%", md: "100%" },
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            [theme.breakpoints.only("sm")]: { mx: "auto" },
          })}
          onClick={resetFilters}
        >
          Reset Filters
        </Button>
      )}
    </Stack>
  );
};

export default CategoriesFilter;
