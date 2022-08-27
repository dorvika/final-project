import { Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchData } from "../../../utils/api";

const TopFilter = ({ setFilterObj, filterObj }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData("/catalog").then((result) => setCategories(result));
  }, []);

  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Button
          variant="outlined"
          onClick={() => setFilterObj({ ...filterObj, categories: "shop all" })}
        >
          shop all
        </Button>
        {categories.map((category) => (
          <Button
            key={category.id}
            variant="outlined"
            onClick={() =>
              setFilterObj({ ...filterObj, categories: category.name })
            }
          >
            {category.name}
          </Button>
        ))}
      </Stack>
    </>
  );
};

export default TopFilter;
