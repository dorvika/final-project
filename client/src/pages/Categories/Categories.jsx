import {
  Breadcrumbs,
  Link,
  Stack,
  Box,
  Pagination,
  Button,
  useMediaQuery,
} from "@mui/material";
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
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const showQty = Number(searchParams.get("perPage")) || 9;
  const totalPages = Math.ceil(filteredProductsQty / showQty);
  const queryString = useLocation().search;

  const toggleFilterMenu = () => {
    setShowFilterMenu((prevValue) => !prevValue);
  };

  const matches = useMediaQuery("(min-width:900px)");

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
      <Breadcrumbs
        sx={(theme) => ({
          mb: "30px",
          [theme.breakpoints.down("md")]: { mb: "10px" },
        })}
      >
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
      <Stack
        direction={{ md: "row", sm: "column" }}
        gap="20px"
        alignItems="flex-start"
        sx={(theme) => ({
          [theme.breakpoints.down("sm")]: { gap: "10px" },
        })}
      >
        <Button
          variant="outlined"
          sx={(theme) => ({
            ml: "auto",
            p: "10px",
            fontSize: 14,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            [theme.breakpoints.up("md")]: { display: "none" },
          })}
          onClick={toggleFilterMenu}
        >
          {showFilterMenu ? "Close" : "Open"} Filters Menu
        </Button>
        {(showFilterMenu || matches) && <CategoriesFilter />}
        <Box sx={{ width: { md: "75%", sm: "100%" } }}>
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
                sx={(theme) => ({
                  mt: "50px",
                  [theme.breakpoints.down("md")]: { mt: "0" },
                })}
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
