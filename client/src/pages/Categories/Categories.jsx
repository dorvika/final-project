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
  const [filterObj, setFilterObj] = useState({
    categories: "",
    // currentPrice: 0, -
    // size: "", +
    // color: "", +
    // fabric: "", +
  });
  /* eslint-disable no-unused-vars */
  let [searchParams, setSearchParams] = useSearchParams();
  /* eslint-enable no-unused-vars */

  const queryString = useLocation().search;

  useEffect(() => {
    dispatch(setFilterParams(filterObj));
    setSearchParams(filterObj);
    fetchData(`/products/filter/${queryString}`).then((data) =>
      console.log(data)
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
        <CategoriesFilter setFilterObj={setFilterObj} filterObj={filterObj} />
        <Box sx={{ width: "75%" }}>
          <TopFilter setFilterObj={setFilterObj} filterObj={filterObj} />
          <Stack
            direction="row"
            justifyContent="space-between"
            marginTop="23px"
            marginBottom="23px"
          >
            <ShowQuantity />
            <SortBy />
          </Stack>
          <Box>
            <CatalogProductList />
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
