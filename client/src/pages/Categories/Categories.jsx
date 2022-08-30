import { Breadcrumbs, Link, Stack, Box, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { CustomPaginationItem } from "./Catalog Product List/styles.js";
import {
  CategoriesFilter,
  TopFilter,
  ShowQuantity,
  SortBy,
  CatalogProductList,
} from "./index.js";
import { useDispatch } from "react-redux";
import { useSearchParams, useLocation } from "react-router-dom";
import { setFilterParams } from "../../store/Filters/actions.js";
import { CategoriesMainContainer } from "./styles";
import { fetchData } from "../../utils/api.js";

const Categories = () => {
  const dispatch = useDispatch();
  let [searchParams, setSearchParams] = useSearchParams();
  const [filterObj, setFilterObj] = useState({
    categories: searchParams.get("categories") || "",
    size: searchParams.get("size") || "",
    color: searchParams.get("color") || "",
    fabric: searchParams.get("fabric") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    sort: searchParams.get("sort") || "",
  });
  const [filteredProducts, setFilteredProducts] = useState([]);

  const selectedFilters = Object.keys(filterObj)
    .filter((key) => filterObj[key] != "")
    .reduce((acc, key) => ({ ...acc, [key]: filterObj[key] }), {});

  const queryString = useLocation().search;

  useEffect(() => {
    dispatch(setFilterParams(selectedFilters));
    setSearchParams(selectedFilters);
    fetchData(`/products/filter/${queryString}`).then((data) =>
      setFilteredProducts(data.products)
    );
  }, [filterObj, dispatch, queryString, setSearchParams]);

  return (
    <CategoriesMainContainer>
      <Breadcrumbs sx={{ mb: "30px" }}>
        <Link underline="hover" color="inherit" href="/">
          Shop
        </Link>
        <Link underline="hover" color="inherit" href="/categories">
          Catalog
        </Link>
      </Breadcrumbs>
      <Stack direction="row" gap="20px" alignItems="flex-start">
        <CategoriesFilter
          filterObj={filterObj}
          setFilterObj={setFilterObj}
          selectedFilters={selectedFilters}
          setSearchParams={setSearchParams}
        />
        <Box sx={{ width: "75%" }}>
          <TopFilter setFilterObj={setFilterObj} filterObj={filterObj} />
          <Stack
            direction="row"
            justifyContent="space-between"
            marginTop="23px"
            marginBottom="23px"
          >
            <ShowQuantity />
            <SortBy filterObj={filterObj} setFilterObj={setFilterObj} />
          </Stack>
          <Box>
            <CatalogProductList filteredProducts={filteredProducts} />
          </Box>
          <Stack alignItems="center" justifyContent="center">
            <Pagination
              count={3}
              sx={{ mt: "50px" }}
              renderItem={(item) => <CustomPaginationItem {...item} />}
            />
          </Stack>
        </Box>
      </Stack>
    </CategoriesMainContainer>
  );
};

export default Categories;
