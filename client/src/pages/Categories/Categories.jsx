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
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import {
  setFilteredProducts,
  setFilteredProductsQty,
} from "../../store/Filters/actions.js";
import { CategoriesMainContainer } from "./styles";
import { fetchData } from "../../utils/api.js";

const Categories = () => {
  const dispatch = useDispatch();
  const { filteredProductsQty } = useSelector((state) => state.filters);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const showQty = Number(searchParams.get("perPage")) || 9;
  const totalPages = Math.ceil(filteredProductsQty / showQty);
  const queryString = useLocation().search;

  useEffect(() => {
    setCurrentPage(Number(searchParams.get("startPage")));
  }, [searchParams]);

  useEffect(() => {
    setIsLoading(true);
    if (queryString) {
      fetchData(`/products/filter/${queryString}`).then((data) => {
        dispatch(setFilteredProducts(data.products));
        dispatch(setFilteredProductsQty(data.productsQuantity));
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, [queryString, dispatch]);

  const handleChange = (event, value) => {
    setCurrentPage(value);
    if (currentPage > totalPages) {
      setCurrentPage(1);
      searchParams.set("startPage", 1);
    }
    searchParams.set("startPage", value);
    searchParams.set("perPage", showQty);
    setSearchParams(searchParams);
  };

  return (
    <CategoriesMainContainer>
      <Breadcrumbs sx={{ mb: "30px" }}>
        <Link underline="hover" color="inherit" href="/">
          Shop
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/catalog?perPage=9&startPage=1"
        >
          Catalog
        </Link>
      </Breadcrumbs>
      <Stack direction="row" gap="20px" alignItems="flex-start">
        <CategoriesFilter />
        <Box sx={{ width: "75%" }}>
          <TopFilter />
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
            <CatalogProductList isLoadingFilter={isLoading} />
          </Box>
          <Stack alignItems="center" justifyContent="center">
            {totalPages >= 2 && (
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handleChange}
                sx={{ mt: "50px" }}
                renderItem={(item) => <CustomPaginationItem {...item} />}
              />
            )}
          </Stack>
        </Box>
      </Stack>
    </CategoriesMainContainer>
  );
};

export default Categories;
