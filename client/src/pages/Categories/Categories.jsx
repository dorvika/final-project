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
  const { showQuantity, filteredProducts, filteredProductsQty } = useSelector(
    (state) => state.filters
  );
  const { products } = useSelector((state) => state.products);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("startPage")) || 1
  );
  const [isLoading, setIsLoading] = useState(false);

  console.log(showQuantity);

  const totalPages = Math.ceil(
    filteredProducts.length > 0
      ? filteredProductsQty / showQuantity
      : products.length / showQuantity
  );

  const queryString = useLocation().search;

  useEffect(() => {
    setIsLoading(true);
    if (queryString) {
      fetchData(`/products/filter/${queryString}`).then((data) => {
        console.log(data);
        dispatch(setFilteredProducts(data.products));
        dispatch(setFilteredProductsQty(data.productsQuantity));
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
    setCurrentPage(1);
  }, [queryString, dispatch]);

  const handleChange = (event, value) => {
    setCurrentPage(value);
    searchParams.set("startPage", value);
    searchParams.set("perPage", showQuantity);
    setSearchParams(searchParams);
  };

  // const currentProductsData = (listProducts) => {
  //   if (currentPage > totalPages) {
  //     setCurrentPage(1);
  //   }
  //   const firstPageIndex = (currentPage - 1) * showQuantity;
  //   const lastPageIndex = firstPageIndex + showQuantity;
  //   return listProducts.slice(firstPageIndex, lastPageIndex);
  // };

  return (
    <CategoriesMainContainer>
      <Breadcrumbs sx={{ mb: "30px" }}>
        <Link underline="hover" color="inherit" href="/">
          Shop
        </Link>
        <Link underline="hover" color="inherit" href="/catalog">
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
            <CatalogProductList
              // currentProductData={currentProductsData}
              isLoadingFilter={isLoading}
            />
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
