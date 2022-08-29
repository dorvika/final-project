import { fetchData } from "../../utils/api";

export const fetchProducts = () => (dispatch) => {
  dispatch({
    type: "START_FETCH_PRODUCTS",
  });
  fetchData("/products")
    .then((products) => {
      const action = loadedProducts(products);
      dispatch(action);
    })
    .catch(() => {
      dispatch(errorLoading());
    });
};

export const loadedProducts = (products) => {
  return {
    type: "LOADED_PRODUCTS",
    payload: { productList: products },
  };
};

export const errorLoading = () => ({
  type: "ERROR_LOADED_PRODUCTS",
});
