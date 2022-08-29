import { Grid } from "@mui/material";
// import productsList from "./ProductsData";
import ProductCard from "./ProductCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../../store/Products/actions";

const CatalogProductList = () => {
  const dispatch = useDispatch();
  const { products, isLoading, hasError } = useSelector(
    (state) => state.products
  );
  const productState = useSelector((state) => state.products);

  console.log("products", products);
  console.log("loading", isLoading);
  console.log("error", hasError);
  console.log("state", productState);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <Grid container rowSpacing={20} columnSpacing={5}>
        {products
          .filter((e, count) => count < 18)
          .map((product) => {
            return (
              <ProductCard
                category={product.categories}
                color={product.color}
                fabric={product.fabric}
                description={product.description}
                size={product.size}
                key={product._id}
                id={product._id}
                image={product.imageUrls[0]}
                title={product.name}
                price={product.currentPrice}
              />
            );
          })}
      </Grid>
    </>
  );
};

export default CatalogProductList;
