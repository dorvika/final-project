import { Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../../store/Products/actions";
import "./style.scss";
import Preloader from "./Preloader.jsx";
import { useLocation } from "react-router-dom";

const CatalogProductList = ({ isLoadingFilter }) => {
  const dispatch = useDispatch();
  const { products, isLoading, hasError } = useSelector(
    (state) => state.products
  );
  const { filteredProducts } = useSelector((state) => state.filters);
  const queryString = useLocation().search;

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      {hasError && (
        <div>
          <p>Ooops, something went wrong</p>
        </div>
      )}
      {isLoading || isLoadingFilter ? (
        <Preloader />
      ) : (
        <Grid container columnSpacing={5}>
          {queryString ? (
            filteredProducts.length === 0 &&
            (!isLoading || !isLoadingFilter) ? (
              <Typography variant="h2" sx={{ m: "50px auto" }}>
                Sorry, there are no matching products :(
              </Typography>
            ) : (
              filteredProducts.map((product) => {
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
                    itemNo={product.itemNo}
                    product={product}
                  />
                );
              })
            )
          ) : (
            products.map((product) => {
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
                  itemNo={product.itemNo}
                  product={product}
                />
              );
            })
          )}
        </Grid>
      )}
    </>
  );
};

export default CatalogProductList;
