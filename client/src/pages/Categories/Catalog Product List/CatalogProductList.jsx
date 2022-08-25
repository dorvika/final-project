import { Grid } from "@mui/material";
import products from "./ProductsData";
import ProductCard from "./ProductCard.jsx";

const CatalogProductList = () => {
  return (
    <>
      <Grid container rowSpacing={20} columnSpacing={5}>
        {products
          .filter((e, count) => count < 18)
          .map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.img}
                title={product.title}
                price={product.price}
              />
            );
          })}
      </Grid>
    </>
  );
};

export default CatalogProductList;
