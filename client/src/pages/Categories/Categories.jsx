import { Breadcrumbs, Link, Stack, Box } from "@mui/material";
import { CategoriesFilter, TopFilter, ShowQuantity, SortBy } from "./index.js";
import { CategoriesMainContainer } from "./styles";

const Categories = () => {
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
        <CategoriesFilter />
        <Box sx={{ width: "75%" }}>
          <TopFilter />
          <Stack
            direction="row"
            justifyContent="space-between"
            margin="23px 0px"
          >
            <ShowQuantity />
            <SortBy />
          </Stack>
          {/*вставити всередину компонент із списком товарів */}
          Список товарів
        </Box>
      </Stack>
    </CategoriesMainContainer>
  );
};

export default Categories;
