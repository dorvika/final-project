import { Grid } from "@mui/material";
import ProductCard from "./ProductCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../../store/Products/actions";

const CatalogProductList = () => {
  const dispatch = useDispatch();
  const { products, isLoading, hasError } = useSelector(
    (state) => state.products
  );
    const showQuantity = useSelector((state) => state.filters.showQuantity);

    useEffect(() => {
      dispatch(fetchProducts());
    }, []);
    return (
      <>
        {isLoading && (
          <div>
            <h4>Products are loading </h4>
          </div>
        )}
        {hasError && (
          <div>
            <p>Ooops, something went wrong</p>
          </div>
        )}
        <Grid container rowSpacing={20} columnSpacing={5}>
          {products
            .filter((e, count) => count < showQuantity)
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
