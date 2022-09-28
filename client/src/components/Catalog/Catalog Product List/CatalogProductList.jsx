import { Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../../store/products/actions";
import "./style.scss";
import Preloader from "../../../utils/Preloader.jsx";
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
        <Typography
          variant="h2"
          sx={(theme) => ({
            textAlign: "center",
            [theme.breakpoints.down("xs")]: { fontSize: 20 },
          })}
        >
          <p>Ooops, something went wrong</p>
        </Typography>
      )}
      {isLoading || isLoadingFilter ? (
        <Preloader />
      ) : (
        <Grid container columnSpacing={5}>
          {queryString ? (
            filteredProducts.length === 0 &&
            (!isLoading || !isLoadingFilter) ? (
              <Typography
                variant="h2"
                sx={(theme) => ({
                  m: "50px auto",
                  [theme.breakpoints.down("sm")]: {
                    m: "20px",
                    fontSize: 22,
                    textAlign: "center",
                    lineHeight: "30px",
                  },
                })}
              >
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
