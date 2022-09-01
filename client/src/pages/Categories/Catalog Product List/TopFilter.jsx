import { Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchData } from "../../../utils/api";

const TopFilter = ({ setFilterObj, filterObj }) => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(
    filterObj.categories || ""
  );

  const allCategories = categories.map((category) => category.name).join();

  useEffect(() => {
    fetchData("/catalog").then((result) => setCategories(result));
  }, []);

  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Button
          variant="outlined"
          sx={{
            backgroundColor:
              activeCategory === allCategories
                ? "primary.main"
                : "primary.contrastText",
            color:
              activeCategory === allCategories
                ? "primary.contrastText"
                : "primary.main",
          }}
          onClick={() => {
            setFilterObj({
              ...filterObj,
              categories: allCategories,
            });
            setActiveCategory(allCategories);
          }}
        >
          shop all
        </Button>
        {categories.map((category) => (
          <Button
            key={category.id}
            variant="outlined"
            sx={{
              backgroundColor:
                activeCategory === category.name
                  ? "primary.main"
                  : "primary.contrastText",
              color:
                activeCategory === category.name
                  ? "primary.contrastText"
                  : "primary.main",
            }}
            onClick={() => {
              setFilterObj({
                ...filterObj,
                categories: category.name,
              });
              setActiveCategory(category.name);
            }}
          >
            {category.name}
          </Button>
        ))}
      </Stack>
    </>
  );
};

export default TopFilter;
