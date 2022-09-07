import { Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchData } from "../../../utils/api";

const TopFilter = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setActiveCategory(searchParams.get("categories"));
  }, [searchParams]);

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
            searchParams.set("categories", allCategories);
            setSearchParams(searchParams);
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
              searchParams.set("categories", category.name);
              setSearchParams(searchParams);
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
